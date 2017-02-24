export const storeRecipes = (recipes) => {
  return {
    type: 'STORE_RECIPES',
    recipes,
  }
}

export const addFav = (recipe) => {
  return {
    type: 'ADD_FAV',
    recipe,
  }
}
