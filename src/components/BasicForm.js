import React from "react";
import useInput from "../hooks/use-input";

const BasicForm = (props) => {
const{
  value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler, 
    reset: resetFirstNameInput,
  } = useInput(value => value.trim() !== '');

const{
  value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler, 
    reset: resetLastNameInput,
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(value => value.includes("@"));

  const formIsValid = enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid ;

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredFirstNameIsValid || !enteredEmailIsValid || !enteredLastNameIsValid) {
      return;
    }
    resetFirstNameInput();
    resetLastNameInput()
    resetEmailInput();
  };

  const firstNameInputClass = firstNameInputHasError ? "form-control invalid" : "form-control";
  const emailInputClass = emailInputHasError ? "form-control invalid" : "form-control";
  const lastNameInputClass = lastNameInputHasError ? "form-control invalid" : "form-control";


  return (
    <form>
      <div className='control-group'>
        <div className={firstNameInputClass}>
          <label htmlFor='name'>First Name</label>
          <input
           type="text"
           id="name"
           onChange={firstNameChangedHandler}
           onBlur={firstNameBlurHandler}
           value={enteredFirstName}
         />
         {firstNameInputHasError && (
           <p className="error-text">Empty or invalid input</p>
         )}
        </div>
        <div className={lastNameInputClass}>
          <label htmlFor='name'>Last Name</label>
          <input 
          type="text"
          id="name"
          onChange={lastNameChangedHandler}
          onBlur={lastNameBlurHandler}
          value={enteredLastName}
          />
          {lastNameInputHasError && (
           <p className="error-text">Empty or invalid input</p>
         )}
        </div>
      </div>
      <div className={emailInputClass}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
       type="text"
       id="name"
       onChange={emailChangeHandler}
       onBlur={emailBlurHandler}
       value={enteredEmail}
        />
        {emailInputHasError && (
           <p className="error-text">Empty or invalid input</p>
         )}
      </div>
      <div className='form-actions'>
      <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
