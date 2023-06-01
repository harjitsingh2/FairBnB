import React, { useState, useEffect, useRef } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import "./LoginForm.css";
import DemoLogin from "./DemoLogin";
import * as uiActions from '../../store/ui';


function LoginForm( ) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
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
    

    const formInformation = {
      email,
      password
    };

    dispatch(sessionActions.login(formInformation));
    setEmail('');
    setPassword('');
    setValidationErrors([]);

    return dispatch(sessionActions.login({ email, password }))
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
    dispatch({type: uiActions.CLOSE_LOGIN_MODAL, payload: 'close'})
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        dispatch({ type: uiActions.CLOSE_LOGIN_MODAL, payload: "close" });
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

    return errors;
  }


  return (
    <>
      <div className="loginForm" ref={modalRef}>
      <button
        className="closeButton"
        onClick={() => dispatch({ type: uiActions.CLOSE_LOGIN_MODAL })}
        >
        X
      </button>
      <form onSubmit={ handleSubmit } >
      <h2>Log In</h2>
      <br></br><br></br>
      <h1>Welcome to Fairbnb</h1>
      <br></br><br></br>
        <ul>
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        <div className="input-box">

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
        </div>
       
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
        <button type="submit">Log In</button>
        <br></br><br></br>
      </form>
        <DemoLogin />
      </div>
    </>
  );
}

export default LoginForm;


// import React, { useState } from "react";
// import * as sessionActions from "../../store/session";
// import { useDispatch, useSelector } from "react-redux";
// import "./LoginForm.css";
// import DemoLogin from "./DemoLogin";
// import * as uiActions from '../../store/ui';


// function LoginForm( ) {
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState([]);
//   const [validationErrors, setValidationErrors] = useState({});
//   const currentUser = useSelector((state) => state.session.user);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setErrors([]);

//     const errors = validate();
//     const errorContent = Object.values(errors);
//     if(errorContent.length) return setValidationErrors(errors)
    

//     const formInformation = {
//       email,
//       password
//     };

//     dispatch(sessionActions.login(formInformation));
//     setEmail('');
//     setPassword('');
//     setValidationErrors([]);

//     return dispatch(sessionActions.login({ email, password }))
//       .catch(async (res) => {
//         let data;
//         try {
//           // .clone() essentially allows you to read the response body twice
//           data = await res.clone().json();
//         } catch {
//           data = await res.text(); // Will hit this case if, e.g., server is down
//         }
//         if (data?.errors) setErrors(data.errors);
//         else if (data) setErrors([data]);
//         else setErrors([res.statusText]);
//       });
//   };

//   if (currentUser) {
//     dispatch({type: uiActions.CLOSE_LOGIN_MODAL, payload: 'close'})
//   }


//   // Frontend error handling
//   const validate = () => {
//     const errors = {};

//     if (!email) {
//       errors.Email = 'Please provide an Email';
//     } 

//     else if(!email.trim()
//                .match(/^(?!\.)[\w+\-.]+(?<!\.)@[\w-]+(\.[a-z\d-]+)*\.[a-z]+$/i)) 
//     {
//       errors.Email = 'Please provide a valid Email';
//     }

//     if (password.length < 8) {
//       errors.Password = 'Password must be at least 8 characters';
//     } 

//     return errors;
//   }


//   return (
//     <>
//       <div className="loginForm">
//       <form onSubmit={ handleSubmit } >
//       <h2>Log In</h2>
//       <br></br><br></br>
//       <h1>Welcome to Fairbnb</h1>
//       <br></br><br></br>
//         <ul>
//           {errors.map(error => <li key={error}>{error}</li>)}
//         </ul>
//         <div className="input-box">

//           <label>
//             Email
//             <input
//               type="text"
//               className="user-input-field"
//               value={email}
//               placeholder="Email Address"
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <br></br>
//             {validationErrors.Email && ( <div className='error-msg'> * {validationErrors.Email}</div> )}
//           </label>
//         </div>
       
//         <br></br><br></br>
//         <label>
//           Password
//           <input
//             type="password"
//             className="user-input-field"
//             value={password}
//             placeholder="Password"
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <br></br>
//           {validationErrors.Password && ( <div className='error-msg'> * {validationErrors.Password}</div> )}
//         </label>
//         <br></br><br></br>
//         <button type="submit">Log In</button>
//         <br></br><br></br>
//       </form>
//         <DemoLogin />
//       </div>
//     </>
//   );
// }

// export default LoginForm;