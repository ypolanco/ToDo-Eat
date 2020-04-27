import React, { useState } from "react";
import "./Bar.css";
import heart from "./heart.svg"

export default function Bar({ calories, label, type, src}) {
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
    <div>
      <div >
        <button className={type} onClick={flipped}><img src={heart} alt=""/></button>
      </div>
      <h5>{calories}</h5>
      <h5>Likes {likes}</h5>
    </div>
  );
}
