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

export const storeSearchRecipes = (recipes) => {
  return {
    type: 'STORE_SEARCH_RECIPES',
    recipes,
  }
}

// export const storeCuisineRecipes = (recipes) => {
//   return {
//     type: 'STORE_CUISINE_RECIPES',
//     recipes,
//   }
// }
