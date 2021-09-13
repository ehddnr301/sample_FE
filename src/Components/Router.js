import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
// import Home from "../HomeRoutes/Home";
import Home from "../Routes/Home"

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home}></Route>
    </Switch>
  </Router>
);