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
                    className="p-3 rounded-lg border-2 border-green-600 bg-green-100 text-black"
                />
                <button type="submit" className="bg-green-100 border-green-600 border-2 text-green-600" >
                    Search
                </button>
            </form>
        </nav>
            <div className="recipes grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {Array.isArray(recipes) && recipes.length > 0 ? (
                    recipes.map((recipe) => (
                        <div key={recipe.id} className="recip recipe-card p-4 bg-neutral-700 shadow-md rounded-lg">
                            <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
                            <h2>{}</h2>
                            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded-md" />
                        </div>
                    ))
                ) : (
                    <p className="text-center">I ran out of taken maybe</p>
                )}
            </div>
        </>
    );
}
