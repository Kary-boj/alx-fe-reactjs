import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json") // Fetch the local JSON file
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Recipe Sharing Platform
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-3 text-gray-900">
              {recipe.title}
            </h2>
            <p className="text-gray-600 mt-1">{recipe.summary}</p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              View Details
            </button>

            <Link to={`/recipe/${recipe.id}`} className="block">
                <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-full h-40 object-cover rounded-lg"
                    />
                    <h2 className="text-xl font-semibold mt-3 text-gray-900">{recipe.title}</h2>
                    <p className="text-gray-600 mt-1">{recipe.summary}</p>
                </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

