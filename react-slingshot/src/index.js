// Set up your application entry point here...
import React from "react";

import ReactDom from "react-dom";
import { Route, Router, browserHistory } from "react-router";

import "./materialize/css/materialize.min.css";

import "./style.css";



import Homepage from "./components/Homepage/Homepage.js";
import NewPerson from "./components/NewPerson/NewPerson.js";
import EditPerson from "./components/EditPerson/EditPerson.js";

ReactDom.render(
  <Router history={browserHistory}>
    <Route path="/" component = {Homepage} />
    <Route path="/people/new" component = {NewPerson} />
    <Route path="/people/:id/edit" component = {EditPerson} />
  </Router>
  , document.getElementById("app"));
