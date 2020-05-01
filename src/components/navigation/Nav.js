import React from "react";
import symbol from "./symbol.png";
import { Link } from "react-router-dom";
import "./Nav.css";
import "./Nav.stories";

export default function Nav(props) {
  return (
    <div>
      <nav className="navigation">
        <Link to="/">
          <img src={symbol} alt="" className="logo" />
        </Link>
        <h1 className="app-name">ToDo:Eat</h1>
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
