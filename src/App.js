import "./styles.css";
import React from "react";
import Header from "./Component/Header";
import { Route, Redirect, Switch } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import SearchResultPage from "./Pages/SearchResultPage";
import JourneyDetailPage from "./Pages/JourneyDetailPage";
import ModalContainer from "./modals/ModalContainer";

export default function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>

        <Route path="/search/:searchPath/:path">
          <JourneyDetailPage />
        </Route>

        <Route path="/search/:postcode">
          <SearchResultPage />
        </Route>

        <Route path="/search/">
          <Redirect to="/" />
        </Route>

        <Route path="/logged-in/:username" exact>
          <h3>logged in with username</h3>
        </Route>

        <Route>
          <h3>Error 404</h3>
        </Route>
      </Switch>
      <ModalContainer />
    </>
  );
}
