import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],  // All available recipes
  searchTerm: '',
  filteredRecipes: [],

  favorites: [],  // User's favorite recipe IDs
  recommendations: [],  // Suggested recipes based on favorites

  // 🔹 Set initial recipes (e.g., from API)
  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),

  // 🔹 Search Functionality
  setSearchTerm: (term) => {
    set((state) => ({
      searchTerm: term,
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase()) ||
        (recipe.ingredients &&
          recipe.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(term.toLowerCase())
          ))
      ),
    }));
  },
  

  // 🔹 Add Recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.recipes, newRecipe], // Keep filtered list updated
    })),

  // 🔹 Update Recipe
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
      filteredRecipes: state.filteredRecipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  // 🔹 Delete Recipe
  deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
      filteredRecipes: state.filteredRecipes.filter(
        (recipe) => recipe.id !== recipeId
      ),
    })),

  // 🔹 Add a recipe to favorites
  addFavorite: (recipeId) => set((state) => ({
    favorites: [...new Set([...state.favorites, recipeId])],  // Avoid duplicates
  })),

  // 🔹 Remove a recipe from favorites
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter((id) => id !== recipeId),
  })),

  // 🔹 Generate Recommendations based on favorited recipes
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(
      (recipe) => favorites.includes(recipe.id) && Math.random() > 0.5  // Mock logic
    );
    set({ recommendations: recommended });
  },

}));

export default useRecipeStore;




