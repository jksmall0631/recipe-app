import * as actions from './index.js';
import stubRecipe from '../components/testing-stubs/stub-recipe';
import stubGrocery from '../components/testing-stubs/stub-grocery';

describe('actions', () => {

  it('should create an action to store recipes', () => {
    const expectedReturn = {
      type: 'STORE_RECIPES',
      recipes: stubRecipe
    }
    expect(actions.storeRecipes(stubRecipe)).toEqual(expectedReturn)
  })

  it('should create an action to add a recipe to the Cookbook', () => {
    const expectedReturn = {
      type: 'ADD_FAV',
      recipe: stubRecipe
    }
    expect(actions.addFav(stubRecipe)).toEqual(expectedReturn)
  })

  it('should create an action that stores a single recipe for use in the singel component', () => {
    const expectedReturn = {
      type: 'SINGLE_FAV',
      recipe: stubRecipe
    }
    expect(actions.moveToSingle(stubRecipe)).toEqual(expectedReturn)
  })

  it('should create an action that stores a single user', () => {
    const expectedReturn = {
      type: 'SET_USER',
      email: 'j@j.com',
      uid: 112233
    }
    expect(actions.setUser('j@j.com', 112233)).toEqual(expectedReturn)
  })

  it('should create an action that resets the value of email and uid on sign out', () => {
    const expectedReturn = {
      type: 'SET_USER',
      email: null,
      uid: null,
    }
    expect(actions.signOut()).toEqual(expectedReturn)
  })

  it('should create an action that stores the data from the search api request', () => {
    const expectedReturn = {
      type: 'STORE_SEARCH_RECIPES',
      recipes: stubRecipe
    }
    expect(actions.storeSearchRecipes(stubRecipe)).toEqual(expectedReturn)
  })

  it('should create an action that stores the favs gotten from firebase', () => {
    const expectedReturn = {
      type: 'GET_FAVS',
      recipes: stubRecipe
    }
    expect(actions.getFavs(stubRecipe)).toEqual(expectedReturn)
  })

  it('should create an action that deletes favorites', () => {
    const expectedReturn = {
      type: 'DELETE_FAV',
      recipe: stubRecipe
    }
    expect(actions.deleteFav(stubRecipe)).toEqual(expectedReturn)
  })

  it('should create an action that stores groceries', () => {
    const expectedReturn = {
      type: 'STORE_GROCERY',
      recipes: stubGrocery
    }
    expect(actions.sendGroceries(stubGrocery)).toEqual(expectedReturn)
  })
})
