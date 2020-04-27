import React from 'react'
import symbol from "../navigation/symbol.png"
import "./Nav.css"

export default function Nav({search}) {
  return (
    <div>
        <nav className= "navigation">
        <img src={symbol} alt="" className="logo" />
        <h1 className="app-name">ToDo: {search}</h1>
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
