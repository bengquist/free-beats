import React, { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"
import routeCodes from "./routeCodes"

const Home = lazy(() => import("../Home/Home"))
const Discover = lazy(() => import("../Feed/Discover"))
const Checkout = lazy(() => import("../Checkout/Checkout"))

function Routes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path={routeCodes.CHECKOUT} component={Checkout} />
        <Route path={routeCodes.DISCOVER} component={Discover} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Suspense>
  )
}

export default Routes
