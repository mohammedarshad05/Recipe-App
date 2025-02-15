import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

interface Recipe {
  name: string;
  cuisine: string;
  ingredients: string[];
  instructions: string[];
  cookTimeMinutes: number;
  image: string;
}
const RecipeDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [recipe, setRecipe] = React.useState<Recipe | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((response) => response.json())
      .then((data) => setRecipe(data))
      .catch(() => setError("Failed to load recipe details ."));
  }, [id]);

  if (error) return <p className="text-danger">{error}</p>;
  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="container mt-5">
      <div className="card custom-card">
        <img
          src={recipe.image}
          className="card-img-top custom-img"
          alt={recipe.name}
        />
        <div className="card-body">
          <h2 className="card-title text-danger">{recipe.name}</h2>
          <h4 className="card-subtitle mb-2 text-muted">{recipe.cuisine}</h4>
          <p className="card-text">
            <strong>Cook Time:</strong> {recipe.cookTimeMinutes} minutes
          </p>
          <h5 className="text-warning">Ingredients:</h5>
          <ul className="list-group list-group-flush">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="list-group-item">
                {ingredient}
              </li>
            ))}
          </ul>
          <h5 className="mt-4 text-warning">Instructions</h5>
          <ol className="list-group list-group-numbered">
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className="list-group-item">
                {instruction}
              </li>
            ))}
          </ol>
          <Link to="/recipes" className="btn btn-primary mt-4">
            ← Back to Recipe List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
