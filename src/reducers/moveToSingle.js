const moveToSingle = (state = [], action) => {
  switch(action.type){
    case 'SINGLE_FAV':
      return action;
    default:
      return state;
  }
}

export default moveToSingle;
