import React, { useState } from "react";
import "./Bar.css";
import heart from "./heart.svg"

export default function Bar({ calories, time}) {
  const [red, isRed] = useState(false);
  const [likes, likesUpdate] = useState(0);

  console.log(red, likes);

  const flipped = e => { 
    e.preventDefault()

    isRed(!red)

    if (red === false) {
      likesUpdate(likes + 1);
    } else { 
      likesUpdate(likes - 1);
    }
    
  }

  return (
    <div className="bar-container">
   
        <button className={red ? "primary" : null} onClick={flipped}><img src={heart} alt="" type="primary"/></button>
      
      {/* <h5>Calories: {calories.toFixed(0)}</h5> */}
      <h5>Calories: {calories}</h5>
      <h5>Time: {time}</h5>
      <h5>Likes {likes}</h5>
    </div>
  );
}
