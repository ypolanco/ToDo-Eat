import React from "react";
import symbol from "../navigation/symbol.png";
import { Link, Route } from "react-router-dom";
import "./Nav.css";
import "./Nav.stories";

export default function Nav({ search, type, label }) {
  return (
    <div>
      <nav className="navigation">
        <Link to="/">
          <img src={symbol} alt="" className="logo" />
        </Link>
        <h1 className="app-name">ToDo: {search}</h1>
        <ol className="menu">
          <Link to="/Chicken/">
            <ul>Chicken</ul>
          </Link>
          <Link to="/Beef/">
            <ul>Beef</ul>
          </Link>
          <Link to="/Pork/">
            <ul>Pork</ul>
          </Link>
          <Link to="/Fish/">
            <ul>Fish</ul>
          </Link>
          <Link to="/Veg/">
            <ul>Vegetarian</ul>
          </Link>
        </ol>
      </nav>
    </div>
  );
}
