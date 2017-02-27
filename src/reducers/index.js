import {combineReducers} from 'redux';
import storeRecipes from './storeRecipes';
import storeFavs from './storeFavs';
import moveToSingle from './moveToSingle';
import setUser from './setUser';
import storeSearchRecipes from './storeSearchRecipes';
// import storeCuisineRecipes from './storeCuisineRecipes';

const allReducers = combineReducers({
  storeRecipes,
  storeFavs,
  moveToSingle,
  setUser,
  storeSearchRecipes,
  // storeCuisineRecipes,
})

export default allReducers;
