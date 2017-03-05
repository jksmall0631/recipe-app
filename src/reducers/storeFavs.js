const storeFavs = (state = [], action) => {
  switch(action.type){
    case 'GET_FAVS':
      console.log(action)
      let keyArray = Object.keys(action.recipes)
      let array = keyArray.map(key => {
        action.recipes[key].info.fav = true;
        return action.recipes[key].info
      })
      return array;
    case 'ADD_FAV':
      console.log('add', action)
      let status = true;
      state.forEach(recipe => {
        if(recipe.id === action.id){
          status = false;
        }
      })
      return status ? [...state, action] : state;
      //check id against object name since its now the id
    case 'DELETE_FAV':
    console.log('delete', action)
      return state.filter(recipe => {
        if(recipe.id !== action.recipe.id){
          return recipe;
        }
      })
    default:
      return state;
  }
}

export default storeFavs;
