import React, { useState } from "react";
import RecipesContext from "./Context"; // Ensure this path is correct

export const FetchProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");

    const fetchRecipes = async () => {
        const recipeData = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=3c3f8b1563b44b6c9c5e971433d2ef16&query=${search}&number=10`
        );
        const recipes = await recipeData.json();
        setRecipes(recipes.results);
        setRecipes(Array.isArray(data.results) ? data.results : []);
        console.log(recipes);
    };

    return (
        <RecipesContext.Provider value={{ recipes, setRecipes, search, setSearch, fetchRecipes }}>
            {children}
        </RecipesContext.Provider>
    );
};

export default FetchProvider;
