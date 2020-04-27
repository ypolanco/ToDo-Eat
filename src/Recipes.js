import React from 'react'

export default function Recipes({title, calories}) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{calories}</p>

    </div>
  )
}
