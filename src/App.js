import React, { useEffect, useState } from "react";
// import {} from "react-router-dom"
import axios from "axios";
import Recipes from "./components/main/Recipes.js";
import Nav from "./components/navigation/Nav";
import Bar from "./components/bar/Bar";
import Info from "./components/information/Info";
import "./App.css"

function App() {
  const [recipes, recipesUpdate] = useState([]);
  const [input, inputSearch] = useState("");
  const [search, searchUrl] = useState("chicken");

  console.log(input);
  console.log(search)
  

  const APP_ID = "483b09fc";
  const APP_KEY = "c041093c46744d0bfbbb6595e6ff606b";

  const url = `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10`;
  // console.log(recipes);

  useEffect(() => {
    randomQuote();
  }, [search]);

  // https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/
  //   10222351444199959/327

  async function randomQuote() {
    const response = await axios(url);
    const data = response.data.hits;
    recipesUpdate(data);
    // console.log(data);
  }

  const updateInput = e => { 
    let target = e.target.value
    let inputLower = target.toLowerCase()
    inputSearch(inputLower)
  }

  const searchItem = e => { 
    e.preventDefault()
    searchUrl(input)
  }

  return (
    <div className="container">
      <div className="nav">
        <Nav search={search}/>
        <form onSubmit={searchItem}>
          <input
            type="text"
            value={input}
            onChange={updateInput}
          />
          <button type="submit">Search</button>
        </form>
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
                onChange={inputSearch}
              ></Bar>
              <Info recipe={recipe.recipe} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
