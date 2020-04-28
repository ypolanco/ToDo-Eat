import React from "react";
import "./Info.css"


export default function info({ recipe }) {
  // console.log('here here',recipe);
  
  return(
  <div className="info-container">
    {recipe.ingredients.map((info) => (
    <div>
      <p className="main-info">{info.text}</p>
    </div>
   ))}
  </div >
  )
}
