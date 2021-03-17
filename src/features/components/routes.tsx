import React from "react";
import { Route, Redirect } from "react-router-dom";
import Demo from "./example/demo";

import Home from "./pages/home";
import Settings from "./pages/settings";
import Test from "./test/test";

const Routes = () => {
  return (
    <>
      <Route exact path="/dashboard" component={Home} />
      <Route exact path="/settings" component={Settings} />
      <Route path="/demo" component={Demo} />
      <Route path="/test" component={Test} />
      <Route
        exact
        path="/"
        render={() => <Redirect from="/" to="/settings" />}
      />
    </>
  );
};

export default Routes;
