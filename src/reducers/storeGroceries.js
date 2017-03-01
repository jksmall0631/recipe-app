const storeGroceries = (state = [], action) => {
  switch(action.type){
    case 'STORE_GROCERY':
      return [...state, action];
    default:
      return state;
  }
}

export default storeGroceries;
