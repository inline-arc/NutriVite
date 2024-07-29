import React, { useContext, useEffect } from "react";
import RecipesContext from "./context/Context";

export default function Home() {
    const { recipes, setSearch, search, fetchRecipes } = useContext(RecipesContext);

    const handleOnChange = (e) => {
        setSearch(e.target.value);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        fetchRecipes(); 
    };

    useEffect(() => {
        const fetcData = async () => {
            await fetchRecipes();
        }
        fetcData();
    }, [search]);

    return (
        <>
            <nav className="bg-green-200 p-4 flex items-center space-x-10 rounded-b-2xl">
            <h1 className="text-green-600 text-3xl font-mono font-semibold">NutriVite</h1>
            <form onSubmit={handleOnSubmit} className="flex items-center gap-6">
                <input
                    type="text"
                    value={search}
                    onChange={handleOnChange}
                    placeholder="Search for a recipe..."
                    className="p-3 rounded-lg border-2 border-green-600 bg-green-100"
                />
                <button type="submit" className="bg-green-100 border-green-600 border-2 text-green-600" >
                    Search
                </button>
            </form>
        </nav>
            <div className="recipes">
                {Array.isArray(recipes) && recipes.length > 0 ? (
                    recipes.map((recipe) => (
                        <div key={recipe.id} className="recipe">
                            <h2>{recipe.title}</h2>
                            <h2>{}</h2>
                            <img src={recipe.image} alt={recipe.title} />
                        </div>
                    ))
                ) : (
                    <p>I ran out of taken maybe</p>
                )}
            </div>
        </>
    );
}
