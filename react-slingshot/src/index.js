// Set up your application entry point here...
import React from "react";

import ReactDom from "react-dom";
import { Route, Router, browserHistory } from "react-router";


import Homepage from "./components/Homepage/Homepage.js";
import NewPerson from "./components/NewPerson/NewPerson.js";

ReactDom.render(
  <Router history={browserHistory}>
    <Route path="/" component = {Homepage} />
    <Route path="/people/new" component = {NewPerson} />
  </Router>
  , document.getElementById("app"));
