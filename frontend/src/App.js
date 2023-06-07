import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation/index";
import ListingsIndexPage from "./components/Listings/ListingsIndexPage";
import CategoryBar from "./components/Listings/CategoryBar";
import ListingsShowPage from "./components/Listings/ListingsShowPage";
import ReservationForm from "./components/Reservations/ReservationForm";

function App() {

  return (
    <>
      <Navigation />
        <Switch>
          <Route path="/" exact>
            <CategoryBar />
            <ListingsIndexPage />
          </Route>
          <Route path="/listings/:listingId" exact>
            <ListingsShowPage />
          </Route>
          <Route path="/listings/filter/:category" exact>
            <CategoryBar />
            <ListingsIndexPage />
          </Route>
          <Route path="/reservations/:reservationId" exact>
            <ReservationForm />
          </Route>
        </Switch>
    </>
  );
}

export default App;