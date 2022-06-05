import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return { isTouched: false, value: "" };
  }
  return initialInputState;
};

const useValidate = (validLogic) => {
  const [inputState, dispatchInput] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const isValid = validLogic(inputState.value);
  const hasError = !isValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatchInput({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = () => {
    dispatchInput({ type: "BLUR" });
  };

  const reset = () => {
    dispatchInput({ type: "RESET" });
  };

  return [
    inputState.value,
    hasError,
    isValid,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  ];
};
export default useValidate;
