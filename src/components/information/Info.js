import React from "react";
import "./Info.css"


export default function info({ recipe }) {
  // console.log('here here',recipe);
  
  return(
    <div className="info-container">
      <h4 className="ingredients">Ingredients</h4>
    {recipe.ingredients.map((info) => (
      <div>
      <p className="main-info">{info.text}</p>
    </div>
   ))}
  </div >
  )
}
