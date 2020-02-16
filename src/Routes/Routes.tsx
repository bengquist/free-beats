import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const Home = lazy(() => import("../Home/Home"));

function Routes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  );
}

export default Routes;
