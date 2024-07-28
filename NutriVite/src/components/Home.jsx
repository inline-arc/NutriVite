import React, { useState } from "react";

export default function Home() {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");

    const fetchRecipes = async () => {
        const recipeData = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=3c3f8b1563b44b6c9c5e971433d2ef16&query=${search}&number=10`
        );
        const recipes = await recipeData.json();
        setRecipes(recipes.results);
        console.log(recipes);
    };

    const fetchRecipesBySearch = (e) => {
        setSearch(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        fetchRecipes();
    };

    return (
        <>
            <h1>NutriVite</h1>
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    value={search}
                    onChange={fetchRecipesBySearch}
                    placeholder="Search for a recipe..."
                />
                <button type="submit">Search</button>
            </form>
            <div className="recipes">
                {recipes.map((recipe) => (
                    <div key={recipe.id} className="recipe">
                        <h2>{recipe.title}</h2>
                        <img src={recipe.image} alt={recipe.title} />
                    </div>
                ))}
            </div>
        </>
    );
}
