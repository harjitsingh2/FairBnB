import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css";
import DemoLogin from "./DemoLogin";

function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
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

  return (
    <>
      <form onSubmit={handleSubmit} className="loginForm">
      <h1>Log In</h1>
        <ul>
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
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
        </label>
        <br></br><br></br>
        <button type="submit">Log In</button>
        <br></br><br></br>
        <DemoLogin />
      </form>
    </>
  );
}

export default LoginForm;