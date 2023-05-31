import React, { useState } from "react";
import { Switch } from "react-router-dom";
// import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormModal";
import LoginFormPage from "./components/LoginFormModal";
import Navigation from "./components/Navigation/index";

function App() {
  const [toggleLogin, setToggleLogin] = useState(false)
  const [toggleSignup, setToggleSignup] = useState(false)
  return (
    <>
      <Navigation setToggleLogin={setToggleLogin} setToggleSignup={setToggleSignup}/>
      {toggleSignup && (<SignupFormPage setToggleSignup={setToggleSignup} />)}
      {toggleLogin && (<LoginFormPage setToggleLogin={setToggleLogin} />)}
        <Switch>
        </Switch>
    </>
  );
}

export default App;