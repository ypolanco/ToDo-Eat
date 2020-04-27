import React from 'react'

export default function Recipes({ title, img }) {
  
  
  return (
    <div>
      <h1>{title}</h1>
      <img src={img} alt=""/>

    </div>
  )
}
