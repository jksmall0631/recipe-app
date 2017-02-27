const storeFavs = (state = [], action) => {
  switch(action.type){
    case 'GET_FAVS':
      let keyArray = Object.keys(action.recipes)
      let array = keyArray.map(key => {
        action.recipes[key].info.fav = true;
        return action.recipes[key].info
      })
      return array;
    case 'ADD_FAV':
      let status = true;
      state.forEach(recipe => {
        if(recipe.id === action.id){
          status = false;
        }
      })
      return status ? [...state, action] : state;
    case 'DELETE_FAV':
      return state.filter(recipe => {
        if(recipe.id !== action.id){
          return recipe;
        }
      })
    default:
      return state;
  }
}

export default storeFavs;
