import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Content from "./pages/Content";
import NotFound from "./pages/NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/content" component={Content} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
