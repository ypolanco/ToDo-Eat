import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Recipes from "./components/main/Recipes.js";
import Nav from "./components/navigation/Nav";
import Bar from "./components/bar/Bar";
import Info from "./components/information/Info";
import "./App.css";
import Chicken from "./components/fav/Chicken";
import Beef from "./components/fav/Beef";
import Pork from "./components/fav/Pork";
import Fish from "./components/fav/Fish";
import Veg from "./components/fav/Veg";

function App(props) {
  const [recipes, recipesUpdate] = useState([]);
  const [input, inputSearch] = useState("");
  const [search, searchUrl] = useState("pizza");

  console.log(input);
  console.log(search);

  const APP_ID = "483b09fc";
  const APP_KEY = "c041093c46744d0bfbbb6595e6ff606b";

  const url = `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=30`;
  // console.log(recipes);

  useEffect(() => {
    randomQuote();
  }, [search]);

  async function randomQuote() {
    const response = await axios(url);
    const data = response.data.hits;
    recipesUpdate(data);
    console.log(data);
  }

  const updateInput = (e) => {
    let target = e.target.value;
    let inputLower = target.toLowerCase();
    inputSearch(inputLower);
  };

  const searchItem = (e) => {
    e.preventDefault();
    searchUrl(input);
    inputSearch("");
  };

  return (
    <div className="container">
      <div className="nav">
      <Nav search={search}/>
        <Route exact path="/">
          <form onSubmit={searchItem} className="form">
            <input
              type="text"
              value={input}
              onChange={updateInput}
              className="story-input"
              placeholder="Enter Your Food Item"
            />
            <button type="submit" label="Search" className="story-submit">
              Search
            </button>
          </form>
          <main className="wrapper">
            <div className="within-wrapper">
              {recipes.map((recipe) => (
                <div>
                  <Recipes
                    title={recipe.recipe.label}
                    img={recipe.recipe.image}
                  ></Recipes>
                  <Bar
                    calories={recipe.recipe.calories}
                    label="Like"
                    time={recipe.recipe.totalTime}
                    type="primary"
                  ></Bar>
                  <Info recipe={recipe.recipe} />
                </div>
              ))}
            </div>
          </main>
        </Route>

        <Route exact path="/Chicken/">
          <Chicken />
        </Route>
        <Route exact path="/Beef/">
          <Beef />
        </Route>
        <Route exact path="/Pork/">
          <Pork />
        </Route>
        <Route exact path="/Fish/">
          <Fish />
        </Route>
        <Route exact path="/Veg/">
          <Veg />
        </Route>
        
      </div>
    </div>
  );
}

export default App;
