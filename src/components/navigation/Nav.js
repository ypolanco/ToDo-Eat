import React from "react";
import symbol from "../navigation/symbol.png";
import { Link, Route } from "react-router-dom";
import "./Nav.css";
import "./Nav.stories";
// import MyLink from "./MyLink";

export default function Nav(props) {
  console.log("HERE HERE", props);

  return (
    <div>
      <nav className="navigation">
        <Link to="/">
          <img src={symbol} alt="" className="logo" />
        </Link>
        <h1 className="app-name">ToDo: {props.search}</h1>
        <ol className="menu">
          <Link to="/Chicken/">
              <span role="img" aria-label="so cool" className="chick">
                🐔
              </span>
          </Link>
          <Link to="/Beef/">
              <span role="img" aria-label="so cool" className="beef">
                🐄
              </span>
          </Link>
          <Link to="/Pork">
            <span role="img" aria-label="so cool" className="pork">
              🐷
            </span>
          </Link>
          <Link to="/Fish/">
            <span role="img" aria-label="so cool" className="fish">
              🐟
            </span>
          </Link>
          <Link to="/Veg/">
            <span role="img" aria-label="so cool" className="veg">
              🥬 
            </span>
          </Link>
        </ol>
      </nav>
    </div>
  );
}
