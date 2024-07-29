import React, { useContext } from "react";
import RecipesContext from "./context/Context";

export default function Home() {
    const { recipes, setSearch, search, fetchRecipes } = useContext(RecipesContext);

    const handleOnChange = (e) => {
        setSearch(e.target.value);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        fetchRecipes(); // Fetch recipes based on the current search query
    };

    return (
        <>
            <h1>NutriVite</h1>
            <form onSubmit={handleOnSubmit}>
                <input
                    type="text"
                    value={search}
                    onChange={handleOnChange}
                    placeholder="Search for a recipe..."
                />
                <button type="submit">Search</button>
            </form>
            <div className="recipes">
                {Array.isArray(recipes) && recipes.length > 0 ? (
                    recipes.map((recipe) => (
                        <div key={recipe.id} className="recipe">
                            <h2>{recipe.title}</h2>
                            <img src={recipe.image} alt={recipe.title} />
                        </div>
                    ))
                ) : (
                    <p>No recipes found.</p>
                )}
            </div>
        </>
    );
}
