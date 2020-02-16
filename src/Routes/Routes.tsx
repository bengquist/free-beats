import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import routeCodes from "./routeCodes";

const Home = lazy(() => import("../Home/Home"));
const DiscoverFeed = lazy(() => import("../Feed/DiscoverFeed"));
const FollowingFeed = lazy(() => import("../Feed/FollowingFeed"));

function Routes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path={routeCodes.FEED_DISCOVER} component={DiscoverFeed} />
        <Route path={routeCodes.FEED_FOLLOWING} component={FollowingFeed} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Suspense>
  );
}

export default Routes;
