import {combineReducers} from 'redux';
import storeRecipes from './storeRecipes';
import storeFavs from './storeFavs';
import moveToSingle from './moveToSingle';
import setUser from './setUser';
import storeSearchRecipes from './storeSearchRecipes';

const allReducers = combineReducers({
  storeRecipes,
  storeFavs,
  moveToSingle,
  setUser,
  storeSearchRecipes,
})

export default allReducers;
