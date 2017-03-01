const setUser = (state = [], action) => {
  switch(action.type){
    case 'SET_USER':
      return action;
    default:
      return state;
  }
}

export default setUser;
