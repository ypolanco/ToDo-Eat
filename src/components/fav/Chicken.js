import React, { useState, useEffect } from "react"
import axios from "axios"
import "./Chicken.css"

export default function Chicken() {
  const [recipes, recipesUpdate] = useState([]);
  

  const APP_ID = "483b09fc";
  const APP_KEY = "c041093c46744d0bfbbb6595e6ff606b";

  const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10`;
  // console.log(recipes);

  useEffect(() => {
    // randomQuote();
  }, []);

  // https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/
  //   10222351444199959/327

  async function randomQuote() {
    const response = await axios(url);
    const data = response.data.hits;
    recipesUpdate(data);
    console.log(data);
  }

  //TODO: 

  return (
    <div>
       {recipes.map((recipe) => (
            <div>
              <p className="chicken2">{recipe.recipe.label}</p>
                {/* {recipe.recipe.label} */}
                {/* img={recipe.recipe.image}
              
              <Bar
                calories={recipe.recipe.calories}
                label="Like"
                time={recipe.recipe.totalTime}
                type="primary"
              ></Bar>
              <Info recipe={recipe.recipe} />
            </div> */}
           </div>
          ))}
    </div>
  )
}
