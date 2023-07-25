import React, {useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [eneteredNameTouched, seteneteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '' ;
  const nameInputIsInvalid = !enteredNameIsValid && eneteredNameTouched;

  const nameInputHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    seteneteredNameTouched(true)
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    seteneteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }
    setEnteredName("");
  };
  

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must Not be Empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
