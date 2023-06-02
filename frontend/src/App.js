import React from "react";
import { Switch } from "react-router-dom";
import Navigation from "./components/Navigation/index";
import ListingsIndexPage from "./components/Listings/ListingsIndexPage";

function App() {

  return (
    <>
      <Navigation />
      <ListingsIndexPage />
        <Switch>
        </Switch>
    </>
  );
}

export default App;