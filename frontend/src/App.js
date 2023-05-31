import React, { useState } from "react";
import { Switch } from "react-router-dom";
// import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormModal";
import LoginFormPage from "./components/LoginFormModal";
import Navigation from "./components/Navigation/index";
import LoginFormModal from "./components/LoginFormModal";

function App() {

  return (
    <>
      <Navigation />
        {/* <LoginFormModal /> */}
        <Switch>
        </Switch>
    </>
  );
}

export default App;