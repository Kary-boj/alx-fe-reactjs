import React from 'react';
import useRecipeStore from './recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) => recipes.find((recipe) => recipe.id === id))
  );
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  return (
    <div>
      <h2>My Favorite Recipes</h2>
      {favorites.length > 0 ? (
        favorites.map((recipe) => (
          <div key={recipe.id} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0' }}>
            <h3>{recipe.title}</h3>
            <button onClick={() => removeFavorite(recipe.id)}>Remove from Favorites</button>
          </div>
        ))
      ) : (
        <p>No favorite recipes yet.</p>
      )}
    </div>
  );
};

export default FavoritesList;

