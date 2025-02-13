import { useEffect, useState } from "react";
// import "./Recipe.css";




interface Recipe {
  index: number;
  id: Number;
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
    <>
      <div className="card">
        {recipes.map((recipe, index) => (
          <div key={index}>
            <img src={recipe.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{recipe.name}</h5>
              <p className="card-text">{recipe.prepTimeMinutes}</p>
              <p className="card-text">{recipe.cuisine}</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default RecipeList;
