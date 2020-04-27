import React from 'react'
import "./Recipes.css"

export default function Recipes({ title, img }) {
  
  
  return (
    <div className="bulk-container">
      <h1 className="title">{title}</h1>
      <img src={img} alt="" className="img"/>
    </div>
  )
}
