import React from "react";
import useValidate from "../Hooks/useValidate";

const BasicForm = (props) => {
  const [
    enterdValueFirst,
    firstHasError,
    isValidFirst,
    firstChangeHandler,
    firstBlurHandler,
    firstReset,
  ] = useValidate((value) => value.trim() !== "");

  const [
    enterdValueLast,
    LastHasError,
    isValidLast,
    LastChangeHandler,
    LastBlurHandler,
    LastReset,
  ] = useValidate((value) => value.trim() !== "");

  const [
    enterdEmail,
    emailHasError,
    isValidEmail,
    emailChangeHandler,
    emailBlurHandler,
    emailReset,
  ] = useValidate((value) =>
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
  );

  let formIsValid = false;

  if (isValidFirst && isValidLast && isValidEmail) {
    formIsValid = true;
  }

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }

    firstReset();
    LastReset();
    emailReset();
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="control-group">
        <div
          className={firstHasError ? "form-control invalid" : "form-control"}
        >
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            value={enterdValueFirst}
            onChange={firstChangeHandler}
            onBlur={firstBlurHandler}
          />
          {firstHasError && (
            <p className="error-text">First name must not be empty</p>
          )}
        </div>
        <div className={LastHasError ? "form-control invalid" : "form-control"}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            value={enterdValueLast}
            onChange={LastChangeHandler}
            onBlur={LastBlurHandler}
          />
          {LastHasError && (
            <p className="error-text">Last name must not be empty</p>
          )}
        </div>
      </div>
      <div className={emailHasError ? "form-control invalid" : "form-control"}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          value={enterdEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
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

export default BasicForm;
