const storeRecipes = (state = {}, action) => {
  switch(action.type){
    case 'STORE_RECIPES':
      // return [...state, action.recipes]
      return Object.assign({}, state, {recipes: action.recipes})
    default:
      return state;
  }
}

export default storeRecipes;
