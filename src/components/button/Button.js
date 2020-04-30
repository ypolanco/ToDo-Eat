import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

export default function Button(props) {
  return (
    <Link to="#">
      <div>
        <h1 type={props.type} className="back-top">
          ^
        </h1>
      </div>
    </Link>
  );
}
