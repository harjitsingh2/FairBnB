import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation/index";
import ListingsIndexPage from "./components/Listings/ListingsIndexPage";
import CategoryBar from "./components/Listings/CategoryBar";
import ListingsShowPage from "./components/Listings/ListingsShowPage";

function App() {

  return (
    <>
      <Navigation />
        <Switch>
          <Route path="/" exact>
            <CategoryBar />
            <ListingsIndexPage />
          </Route>
          <Route path="/listings/:listingId">
            <ListingsShowPage />
          </Route>
          <Route path="/listings/:category">
            <ListingsShowPage />
          </Route>
        </Switch>
    </>
  );
}

export default App;