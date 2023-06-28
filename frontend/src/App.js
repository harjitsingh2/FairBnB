import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation/index";
import ListingsIndexPage from "./components/Listings/ListingsIndexPage";
import CategoryBar from "./components/Listings/CategoryBar";
import ListingsShowPage from "./components/Listings/ListingsShowPage";
// import ReservationsIndexItem from "./components/Reservations/ReservationsIndexItem";
import ReservationsIndex from "./components/Reservations/ReservationsIndex";
import UpdateReservation from "./components/Reservations/UpdateReservation";

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
          <Route path="/listings/category/:category" exact>
            <CategoryBar />
            <ListingsIndexPage />
          </Route>
          <Route path="/user/:reservations" exact>
            {/* <ReservationsIndexItem /> */}
            <ReservationsIndex />
          </Route>
          <Route path="/user/reservations/:reservationId" exact>
            <UpdateReservation />
          </Route>
        </Switch>
    </>
  );
}

export default App;