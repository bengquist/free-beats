import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const Home = lazy(() => import("../Home/Home"));
const DiscoverFeed = lazy(() => import("../Feed/DiscoverFeed"));
const FollowingFeed = lazy(() => import("../Feed/FollowingFeed"));

function Routes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/discover" component={DiscoverFeed} />
        <Route path="/following" component={FollowingFeed} />
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  );
}

export default Routes;
