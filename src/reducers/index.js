import {combineReducers} from 'redux';
import storeRecipes from './storeRecipes';
import storeFavs from './storeFavs';
import moveToSingle from './moveToSingle';
import setUser from './setUser';

const allReducers = combineReducers({
  storeRecipes,
  storeFavs,
  moveToSingle,
  setUser,
})

export default allReducers;
