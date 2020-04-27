import React, { useEffect, useState } from "react";
// import {} from "react-router-dom"
import axios from "axios";
import Recipes from "./Recipes.js";

function App() {
  const [recipes, recipesUpdate] = useState([]);
  const APP_ID = "483b09fc";
  const APP_KEY = "c041093c46744d0bfbbb6595e6ff606b";

  const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10`;
  console.log(recipes);

  useEffect(() => {
    randomQuote();
  }, []);

  // https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/
  //   10222351444199959/327

  async function randomQuote() {
    const response = await axios(url);
    const data = response.data.hits;
    recipesUpdate(data);
    // console.log(data);
  }

  return (
    <div>
      <h1>Hello</h1>
      {recipes.map((recipe) => (
        <Recipes title={recipe.recipe.label} calories={recipe.recipe.calories}/>
      ))}
    </div>
  );
}

export default App;
