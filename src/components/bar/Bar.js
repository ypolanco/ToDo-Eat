import React, { useState } from "react";
import "./Bar.css";
import heart from "./heart.svg"

export default function Bar({ calories, time}) {
  const [red, isRed] = useState(false);
  const [likes, likesUpdate] = useState(0);


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
   
        <button onClick={flipped}><img src={heart} alt="" type="primary" className={red ? "primary" : "primary2"}/></button>
      
      {/* <h5>Calories: {calories.toFixed(0)}</h5> */}
      <h5>Calories: {calories.toFixed(0)}</h5>
      <h5>Time: {time}</h5>
      <h5>Likes {likes}</h5>
    </div>
  );
}
