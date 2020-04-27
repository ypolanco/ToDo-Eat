import React, { useEffect, useState } from "react";
// import {} from "react-router-dom"
import axios from "axios";
import Recipes from "./components/main/Recipes.js";
import Nav from "./components/navigation/Nav";
import Bar from "./components/bar/Bar";
import Info from "./components/information/Info";

function App() {
  const [recipes, recipesUpdate] = useState([]);
  const [input, inputSearc] = useState("");
  const [search, searchUrl] = useState("");
  const APP_ID = "483b09fc";
  const APP_KEY = "c041093c46744d0bfbbb6595e6ff606b";

  const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10`;
  console.log(recipes);

  useEffect(() => {
    // randomQuote();
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
    <>
      <div className="nav">
        <Nav />
      </div>
      <main>
        <div>
          {recipes.map((recipe) => (
            <div>
              <Recipes
                title={recipe.recipe.label}
                img={recipe.recipe.image}
              ></Recipes>
              <Bar
                calories={recipe.recipe.calories}
                label="Like"
                type="primary"
              ></Bar>
              <Info recipe={recipe.recipe} />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
