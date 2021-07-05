import "./styles.css";
import React from "react";
import Header from "./Component/Header";
import { Route, Redirect, Switch } from "react-router-dom";
import MainNoLoginPage from "./Pages/MainNoLoginPage";

export default function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route path="/" exact>
          <MainNoLoginPage />
        </Route>

        <Route path="/search/:postcode">
          <h3>Search result</h3>
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
    </>
  );
}
