import React from 'react';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0' }}>
          <h3>{recipe.title}</h3>
          <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
          <p><strong>Cooking Time:</strong> {recipe.cookingTime} minutes</p>

          {favorites.includes(recipe.id) ? (
            <button onClick={() => removeFavorite(recipe.id)}>★ Remove from Favorites</button>
          ) : (
            <button onClick={() => addFavorite(recipe.id)}>☆ Add to Favorites</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;

