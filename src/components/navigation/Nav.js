import React from 'react'
import symbol from "../navigation/symbol.png"
import "./Nav.css"

export default function Nav() {
  return (
    <div>
        <nav>
        <img src={symbol} alt="" className="logo" />
        <ol className="menu">
          <ul>Chicken</ul>
          <ul>Beef</ul>
          <ul>Pork</ul>
          <ul>Fish</ul>
          <ul>Vegetarian</ul>
        </ol>
        </nav>
    </div>
  )
}
