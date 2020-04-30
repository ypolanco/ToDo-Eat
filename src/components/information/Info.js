import React from "react";
import "./Info.css"


export default function info({ recipe }) {
  // console.log('here here',recipe);
  
  return(
    <div className="info-container" key="infoContainer">
      <h4 className="ingredients">Ingredients</h4>
    {recipe.ingredients.map((info) => (
      <div key="info">
      <p className="main-info" key="ingredients">{info.text}</p>
    </div>
   ))}
  </div >
  )
}
