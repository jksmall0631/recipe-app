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

export const signOut = () => {
  return {
    type: 'SET_USER',
    email: null,
    uid: null,
  }
}

export const storeSearchRecipes = (recipes) => {
  return {
    type: 'STORE_SEARCH_RECIPES',
    recipes,
  }
}

export const getFavs = (recipes) => {
  return {
    type: 'GET_FAVS',
    recipes,
  }
}

export const deleteFav = (recipe) => {
  return {
    type: 'DELETE_FAV',
    recipe,
  }
}

export const sendGroceries = (grocery) => {
  return {
    type: 'STORE_GROCERY',
    grocery,
  }
}
