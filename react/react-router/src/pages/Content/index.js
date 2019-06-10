import React from "react";
import { Route } from "react-router-dom";

import Content1 from "./Content1";
import Content2 from "./Content2";

export default () => (
  <>
    <h1>Content</h1>
    <Route path="/content/1" component={Content1} />
    <Route path="/content/2" component={Content2} />
  </>
);
