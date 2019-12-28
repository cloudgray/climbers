import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Header from "Components/Header";
import Home from "Routes/Home";
import Centers from "Routes/Centers";
import Gallery from "Routes/Gallery";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/centers" exact component={Centers} />
        <Route path="/gallery" exact component={Gallery} />
      </Switch>
    </>
  </Router>
);
