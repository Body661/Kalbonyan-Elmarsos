import React from "react";
import useValidate from "../Hooks/useValidate";

const SimpleInput = (props) => {
  const [enterdName, hasError, isValid, nameChange, inputNameBlur, resetName] =
    useValidate((value) => value.trim() !== "");

  const [
    enterdEmail,
    emailHasError,
    isValidEmail,
    emailChange,
    inputEmailBlur,
    resetEmail,
  ] = useValidate((value) =>
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
  );

  let formIsValid = false;

  if (isValid && isValidEmail) {
    formIsValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!isValid && !isValidEmail) {
      return;
    }

    resetName();
    resetEmail();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={hasError ? "form-control invalid" : "form-control"}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enterdName}
          onChange={nameChange}
          onBlur={inputNameBlur}
        />
        {hasError && <p className="error-text">Name must not be empty</p>}
      </div>

      <div className={emailHasError ? "form-control invalid" : "form-control"}>
        <label htmlFor="name">Your Email</label>
        <input
          type="email"
          id="email"
          value={enterdEmail}
          onChange={emailChange}
          onBlur={inputEmailBlur}
        />
        {emailHasError && (
          <p className="error-text">Please enter a valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
