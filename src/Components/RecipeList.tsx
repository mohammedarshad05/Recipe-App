import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Recipe {
  id: number;
  name: string;
  cuisine: string;
  prepTimeMinutes: number;
  image: string;
}

function RecipeList() {

  const [recipes, setRecipe] = useState<Recipe[]>([]);

  const fetchRecipes = async () => {
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();
    setRecipe(data.recipes);
  };

  useEffect(() => {
      fetchRecipes();
    },[]);
  return (
    <div className="container">
    <div className="row">
      <h2>🍽️ Recipe Lists</h2>
        {recipes.map((recipe) => (
            <div className="col-md-4" key={recipe.id}>
                <div className="card mb-4 shadow-sm hover-shadow">
                    <div className="card-body">
                        <h5 className="card-title">{recipe.name}</h5>
                        <img src={recipe.image} className="card-img-top" alt="..."/>
                        <p className="card-text">{recipe.cuisine}</p>
                        <p className="card-text">{recipe.prepTimeMinutes}</p>
                        <Link className="btn btn-outline-primary" to={`/recipes/${recipe.id}`}>🍴{recipe.name}</Link>
                        </div>
                </div>
            </div>
        ))}
    </div>
</div>
);
}
export default RecipeList;