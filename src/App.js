import React from "react";
import Recipemain from "./Recipemain.js";
import Login from "./Login.js";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Test from "./Test.js";
import About from "./About.js";
import Recipemaindt from "./Recipemaindt.js";
import Readmore from './Readmore.js';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/recipe">
          <Test />
          <Recipemain />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/recipedt">
          <Test />
          <Recipemaindt />
        </Route>
        <Route path="/readmore">
          <Readmore />
        </Route>
      </Switch>
    </Router>
  );
}
