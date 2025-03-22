import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams(); // Get recipe ID from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((recipe) => recipe.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch((error) => console.error("Error loading data:", error));
  }, [id]);

  if (!recipe) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg"
        />
        <h1 className="text-3xl font-bold mt-4">{recipe.title}</h1>
        <p className="text-gray-700 mt-2">{recipe.summary}</p>

        <h2 className="text-2xl font-semibold mt-4">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-600 mt-2">
          {recipe.ingredients?.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mt-4">Instructions</h2>
        <ol className="list-decimal list-inside text-gray-600 mt-2">
          {recipe.instructions?.map((step, index) => (
            <li key={index} className="mt-1">{step}</li>
          ))}
        </ol>

        <Link
          to="/"
          className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default RecipeDetail;
