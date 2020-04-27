import React from "react";


export default function info({ recipe }) {
  console.log('here here',recipe);
  
  return(
  <div>
    {recipe.ingredients.map((info) => (
    <div>
      <p>{info.text}</p>
    </div>
   ))}
  </div >
  )
}
