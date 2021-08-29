import React from "react";

import { Route,Switch } from "react-router-dom";

import Creator from "./pages/Creator";
import NotFound from "./pages/NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Creator} />
      <Route path="/" component={NotFound} />
    </Switch>
  );
};

export default Routes;