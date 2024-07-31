import React, { useEffect } from "react";
import RecipesContext from "../context/Context";
import { useContext } from "react";

export function Blog() {
    const { recipesId , fetchRecipesId } = useContext(RecipesContext);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async (id) => {
            await fetchRecipesId(id);
        }
        fetchData();
    }, [id,fetchRecipesId]);

    return (
        <>
        <div>
            <h1>{recipesId.title}</h1>
            <img src={recipesId.image} alt={recipe.title} />
            <p>{recipesId.summary}</p>
        </div>
        </>
    )
}

export default Blog;