import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],  // All available recipes
  favorites: [],  // User's favorite recipe IDs

  // Add a recipe to favorites
  addFavorite: (recipeId) => set((state) => ({
    favorites: [...new Set([...state.favorites, recipeId])],  // Avoid duplicates
  })),

  // Remove a recipe from favorites
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter((id) => id !== recipeId),
  })),

  // Compute recommendations based on favorited recipes
  recommendations: [],
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(
      (recipe) => favorites.includes(recipe.id) && Math.random() > 0.5 // Mock logic
    );
    set({ recommendations: recommended });
  },

  // Set recipes when fetched from API
  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;



