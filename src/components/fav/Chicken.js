import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Animal.css";

export default function Chicken() {
  const [recipes, recipesUpdate] = useState([]);

  const APP_ID = "483b09fc";
  const APP_KEY = "c041093c46744d0bfbbb6595e6ff606b";

  const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10`;
  // console.log(recipes);

  useEffect(() => {
    randomQuote();
  }, []);

  async function randomQuote() {
    const response = await axios(url);
    const data = response.data.hits;
    recipesUpdate(data);
    console.log(data);
  }

  //TODO:

  return (
    <div>
      <h4 className="favorite"> Meals to Inspire</h4>
      {recipes.map((recipe) => (
        <div className="animal-container" key="chicken-container">
          <p className="animal-label" key="chicken-label">
            {recipe.recipe.label}
          </p>
          <img
            src={recipe.recipe.image}
            alt=""
            className="animal-img"
            key="chicken-img"
          />
          <div className="bottom-container">
            <p className="animal-time" key="chicken-time">
              Time: {recipe.recipe.totalTime}
            </p>
            <p className="animal-source" key="chicken source">
              Source: {recipe.recipe.source}
            </p>
            <a
              href={recipe.recipe.shareAs}
              className="animal-link"
              key="chicken-link"
            >
              Full Recipe
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
