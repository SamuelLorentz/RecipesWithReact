import React, { useEffect, useState } from "react";
import Recipe from "./recipe";
import "./App.css";

const App = () => {
  const APP_ID = "1ff951c0";
  const APP_KEY = "b419bc2620f24f03967d11126f55bf26";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(async () => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" value={search} onChange />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
};

export default App;
