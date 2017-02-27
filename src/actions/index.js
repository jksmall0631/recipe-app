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

export const moveToSingle = (recipe) => {
  return {
    type: 'SINGLE_FAV',
    recipe,
  }
}

export const setUser = (email, uid) => {
  return {
    type: 'SET_USER',
    email,
    uid,
  }
}
