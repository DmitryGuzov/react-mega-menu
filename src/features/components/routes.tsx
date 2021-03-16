import React from "react";
import { Route, Redirect } from "react-router-dom";

import Home from "./pages/home";
import Settings from "./pages/settings";

const Routes = () => {
  return (
    <>
      <Route exact path="/dashboard" component={Home} />
      <Route exact path="/settings" component={Settings} />
      <Redirect from="/" to="/dashboard" />
    </>
  );
};

export default Routes;
