import React from "react";
import { storiesOf } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";
import symbol from "./symbol.png";
import Nav from "./Nav";

storiesOf("Links", module)
  .add("Chicken Link", () => (
    <Router>
      <Nav className="chicken" label="chick" type="chick" />
    </Router>
  ))
  .add("Beef Link", () => (
    <Router>
      <Nav className="cow" label="cow" type="cow" />
    </Router>
  ))
  .add("Pork Link", () => (
    <Router>
      <Nav className="pork" label="pork" type="pork" />
    </Router>
  ))
  .add("Fish Link", () => (
    <Router>
      <Nav className="fish" label="fish" type="fish" />
    </Router>
  ))
  .add("Veg Link", () => (
    <Router>
      <Nav className="veg" label="veg" type="veg" />
    </Router>
  ));

storiesOf("Logo", module).add("Logo Link", () => (
  <Router>
    <Nav className="logo" label="logo" src={symbol} />
  </Router>
));

storiesOf("Name", module).add("Logo Link", () => (
  <Router>
    <Nav className="app-name" label="app-name" />
  </Router>
));
