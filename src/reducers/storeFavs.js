const storeFavs = (state = [], action) => {
  switch(action.type){
    case 'ADD_FAV':
      return [...state, action]
    default:
      return state;
  }
}

export default storeFavs;
