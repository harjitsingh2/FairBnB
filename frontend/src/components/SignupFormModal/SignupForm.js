import React, { useState, useEffect, useRef } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import "./SignupForm.css";
import * as uiActions from '../../store/ui';


function SignupForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [validationErrors, setValidationErrors] = useState({});
  const currentUser = useSelector((state) => state.session.user);
  const modalRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);

    const errors = validate();
    const errorContent = Object.values(errors);
    if(errorContent.length) return setValidationErrors(errors)
    

    // const formInformation = {
    //   email,
    //   password,
    //   firstName,
    //   lastName
    // };

    // console.log(formInformation);
    // dispatch(sessionActions.signup(formInformation));
 


    dispatch(sessionActions.signup({ email, first_name: firstName, last_name: lastName, password }))
      .then(res => {
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
        setValidationErrors([]);
      })
      .catch(async (res) => {
          let data;
          try {
            // .clone() essentially allows you to read the response body twice
            data = await res.clone().json();
          } catch {
            data = await res.text(); // Will hit this case if, e.g., server is down
          }
          if (data?.errors) setErrors(data.errors);
          else if (data) setErrors([data]);
          else setErrors([res.statusText]);
        });
  };

  if (currentUser) {
    dispatch({type: uiActions.CLOSE_SIGNUP_MODAL, payload: 'close'})
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        dispatch({ type: uiActions.CLOSE_SIGNUP_MODAL, payload: "close" });
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);


  // Frontend error handling
  const validate = () => {
    const errors = {};

    if (!email) {
      errors.Email = 'Please provide an Email';
    } 

    else if(!email.trim()
               .match(/^(?!\.)[\w+\-.]+(?<!\.)@[\w-]+(\.[a-z\d-]+)*\.[a-z]+$/i)) 
    {
      errors.Email = 'Please provide a valid Email';
    }

    if (password.length < 8) {
      errors.Password = 'Password must be at least 8 characters';
    } 

    if (firstName.length <= 0) {
      errors.firstName = 'You must provide a first and last name';
    } 

    if (lastName.length <= 0) {
      errors.lastName = 'You must provide a first and last name';
    } 

    return errors;
  }

  return (
    <>
      <div className="signupForm" ref={modalRef}>
      <form onSubmit={handleSubmit} className="signupForm">
      <div className="form-header">
      <button
        className="closeButton"
        onClick={() => dispatch({ type: uiActions.CLOSE_SIGNUP_MODAL })}
        >
        X
      </button>
      <h2>Sign Up</h2>
      </div>
      <br></br><br></br>
      <h1>Welcome to Fairbnb</h1>
      <br></br>
        <ul className="error-msg">
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        <br></br>
        <label>
          Email
          <input
            type="text"
            className="user-input-field"
            value={email}
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br></br>
          {validationErrors.Email && ( <div className='error-msg'> * {validationErrors.Email}</div> )}
        </label>
        <br></br><br></br>
        <label>
          First Name
          <input
            type="text"
            className="user-input-field"
            value={firstName}
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <br></br>
          {validationErrors.firstName && ( <div className='error-msg'> * {validationErrors.firstName}</div> )}
        </label>
        <br></br><br></br>
        <label>
          Last Name
          <input
            type="text"
            className="user-input-field"
            value={lastName}
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <br></br>
          {validationErrors.lastName && ( <div className='error-msg'> * {validationErrors.lastName}</div> )}
        </label>
        <br></br><br></br>
        <label>
          Password
          <input
            type="password"
            className="user-input-field"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br></br>
          {validationErrors.Password && ( <div className='error-msg'> * {validationErrors.Password}</div> )}
        </label>
        <br></br><br></br>
        <button className="login-button"type="submit">Create Account</button>
      </form>
      </div>
    </>
  );
}

export default SignupForm;