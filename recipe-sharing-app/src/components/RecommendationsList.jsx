import React, { useEffect } from 'react';
import useRecipeStore from '../store/recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div>
      <h2>Recommended for You</h2>
      {recommendations.length > 0 ? (
        recommendations.map((recipe) => (
          <div key={recipe.id} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0' }}>
            <h3>{recipe.title}</h3>
          </div>
        ))
      ) : (
        <p>No recommendations available. Favorite some recipes to get suggestions!</p>
      )}
    </div>
  );
};

export default RecommendationsList;

