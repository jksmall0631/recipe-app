import {combineReducers} from 'redux';
import storeRecipes from './storeRecipes';
import storeFavs from './storeFavs';

const allReducers = combineReducers({
  storeRecipes,
  storeFavs,
})

export default allReducers;
