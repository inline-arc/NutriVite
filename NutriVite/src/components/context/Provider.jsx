import React, { useState, useEffect} from "react";
import RecipesContext from "./Context"; 

export const FetchProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [recipeId, setRecipeId] = useState("");

    
    const fetchRecipes = async () => {
        const recipeData = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=3c3f8b1563b44b6c9c5e971433d2ef16&query=${search}&number=12`
        );
        const recipes = await recipeData.json();
        setRecipes(recipes.results);
        setRecipes(Array.isArray(recipes.results) ? recipes.results : []);
    };

    const fetchRecipeId = async () => {
        const fetchId = await fetch(
            `https://api.spoonacular.com/recipes/information?apiKey=3c3f8b1563b44b6c9c5e971433d2ef16`
        );
        const recipeId = await fetchId.json();
        setRecipeId(recipeId.results);
        setRecipeId(Array.isArray(recipeId.results) ? recipeId.results : []);
    };

    return (
        <RecipesContext.Provider value={{ recipes, setRecipes, search, setSearch, fetchRecipes, recipeId, setRecipeId, fetchRecipeId }}>
            {children}
        </RecipesContext.Provider>
    );
};

export default FetchProvider;
