import {combineReducers} from 'redux';
import storeRecipes from './storeRecipes';
import storeFavs from './storeFavs';
import moveToSingle from './moveToSingle';

const allReducers = combineReducers({
  storeRecipes,
  storeFavs,
  moveToSingle,
})

export default allReducers;
