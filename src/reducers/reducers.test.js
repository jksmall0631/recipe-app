import React from 'react';

import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme';
import { combineReducers } from 'redux';

import allReducers from './index.js';
import moveToSingle from './moveToSingle';
import setUser from './setUser';
import storeFavs from './storeFavs';
import storeGroceries from './storeGroceries';
import storeRecipes from './storeRecipes';
import storeSearchRecipes from './storeSearchRecipes';

describe('allReducers', () => {
  it('should be a function', () => {
    assert.isFunction(allReducers)
  })
})

describe('moveToSingle', () => {
  it('should be a function', () => {
      assert.isFunction(moveToSingle)
  })

  it('should return an initial state of []',
  () => {
    const defaultState = moveToSingle(undefined, [])
    expect(defaultState).to.exist
  })

  it('should return state with a single recipe', ()=>{
    const defaultState = moveToSingle(undefined, [])
    const singleRecipeAction = {
      type: 'SINGLE_FAV',
      action: {
        analyzedInstructions: [{steps: [{ingredients: ['butter'], step: "Place the chicken fillet cubes in a bowl."}]}],
        extendedIngredients: [{name: 'cornstarch'}],
        id: 521286,
        image: "https://spoonacular.com/recipeImages/A-la-chicken-karaage-521286.jpg",
        instructions: "InstructionsPlace the chicken fillet cubes in a bowl. Add the rice wine, soy sauce, lemon juice and ginger. Mix well. Cover and allow to marinate in the fridge for about an hour.Heat the cooking oil.Dredge each piece of chicken in starch and cook in batches over medium-high heat. Depending on the size of your frying pan, you may need to cook all the chicken in three to four batches. If the temperature is correct, each batch should cook in about five minutes without the chicken pieces turning too dark.Drain the fried chicken fillets on a rack or a stack of kitchen paper. Transfer to a serving platter.Drizzle the mayo, mustard and Sriracha over the fried chicken. Sprinkle with finely sliced scallions.",
        pricePerServing: 313.47,
      }
    }
    const testState = moveToSingle(defaultState, singleRecipeAction)
    const singleRecipeId = Object.values(testState.recipe)[1].id
    expect(defaultState.id).to.not.exist
    expect(testState.id).to.exist
    expect(singleRecipeId).to.equal(521286)
  })
})

describe('setUser', () => {
  it('should be a function', () => {
      assert.isFunction(setUser)
  })

  it('should return an initial state of []',
  () => {
    const defaultState = setUser(undefined, [])
    expect(defaultState).to.exist
  })

  it('should return state with a new user property upon user login', ()=>{
    const defaultState = setUser(undefined, [])
    const loginAction = {
      type: 'SET_USER',
      action: {
        uid: 1,
        email: 'j@j.com'
      }
    }
    const testState = setUser(defaultState, loginAction)
    const newUserId = Object.values(testState.user)[1].uid
    expect(defaultState.user).to.not.exist
    expect(testState.user).to.exist
    expect(newUserId).to.equal(1)
  })
})

describe('storeFavs', () => {
  it('should be a function', () => {
      assert.isFunction(storeFavs)
  })

  it('should return an initial state of []',
  () => {
    const defaultState = storeFavs(undefined, [])
    expect(defaultState).to.exist
  })

  it('should return state with a new recipe', ()=>{
    const defaultState = storeFavs(undefined, [])
    const favAction = {
      type: 'GET_FAVS',
      action:
      [
        {
          analyzedInstructions: [{steps: [{ingredients: ['butter'], step: "Place the chicken fillet cubes in a bowl."}]}],
          extendedIngredients: [{name: 'cornstarch'}],
          id: 521286,
          image: "https://spoonacular.com/recipeImages/A-la-chicken-karaage-521286.jpg",
          instructions: "InstructionsPlace the chicken fillet cubes in a bowl. Add the rice wine, soy sauce, lemon juice and ginger. Mix well. Cover and allow to marinate in the fridge for about an hour.Heat the cooking oil.Dredge each piece of chicken in starch and cook in batches over medium-high heat. Depending on the size of your frying pan, you may need to cook all the chicken in three to four batches. If the temperature is correct, each batch should cook in about five minutes without the chicken pieces turning too dark.Drain the fried chicken fillets on a rack or a stack of kitchen paper. Transfer to a serving platter.Drizzle the mayo, mustard and Sriracha over the fried chicken. Sprinkle with finely sliced scallions.",
          pricePerServing: 313.47,
        },
        {
          analyzedInstructions: [{steps: [{ingredients: ['butter'], step: "Place the chicken fillet cubes in a bowl."}]}],
          extendedIngredients: [{name: 'cornstarch'}],
          id: 521286,
          image: "https://spoonacular.com/recipeImages/A-la-chicken-karaage-521286.jpg",
          instructions: "InstructionsPlace the chicken fillet cubes in a bowl. Add the rice wine, soy sauce, lemon juice and ginger. Mix well. Cover and allow to marinate in the fridge for about an hour.Heat the cooking oil.Dredge each piece of chicken in starch and cook in batches over medium-high heat. Depending on the size of your frying pan, you may need to cook all the chicken in three to four batches. If the temperature is correct, each batch should cook in about five minutes without the chicken pieces turning too dark.Drain the fried chicken fillets on a rack or a stack of kitchen paper. Transfer to a serving platter.Drizzle the mayo, mustard and Sriracha over the fried chicken. Sprinkle with finely sliced scallions.",
          pricePerServing: 313.47,
        }
      ]
    }
    const testState = storeFavs(defaultState, favAction)
    const faveArray = Object.values(testState.favs)
    expect(defaultState.favs).to.not.exist
    expect(testState.favs).to.exist
    expect(faveArray).to.have.length(2)
  })
})

describe('storeSearchRecipes', () => {
  it('should be a function', () => {
      assert.isFunction(storeSearchRecipes)
  })

  it('should return an initial state of {}',
  () => {
    const defaultState = storeSearchRecipes(undefined, {})
    expect(defaultState).to.exist
  })

  it('should return state with all searched recipes', ()=>{
    const defaultState = storeSearchRecipes(undefined, {})
    const searchAction = {
      type: 'STORE_SEARCH_RECIPES',
      action:
      [
        {
          analyzedInstructions: [{steps: [{ingredients: ['butter'], step: "Place the chicken fillet cubes in a bowl."}]}],
          extendedIngredients: [{name: 'cornstarch'}],
          id: 521286,
          image: "https://spoonacular.com/recipeImages/A-la-chicken-karaage-521286.jpg",
          instructions: "InstructionsPlace the chicken fillet cubes in a bowl. Add the rice wine, soy sauce, lemon juice and ginger. Mix well. Cover and allow to marinate in the fridge for about an hour.Heat the cooking oil.Dredge each piece of chicken in starch and cook in batches over medium-high heat. Depending on the size of your frying pan, you may need to cook all the chicken in three to four batches. If the temperature is correct, each batch should cook in about five minutes without the chicken pieces turning too dark.Drain the fried chicken fillets on a rack or a stack of kitchen paper. Transfer to a serving platter.Drizzle the mayo, mustard and Sriracha over the fried chicken. Sprinkle with finely sliced scallions.",
          pricePerServing: 313.47,
        },
        {
          analyzedInstructions: [{steps: [{ingredients: ['butter'], step: "Place the chicken fillet cubes in a bowl."}]}],
          extendedIngredients: [{name: 'cornstarch'}],
          id: 521286,
          image: "https://spoonacular.com/recipeImages/A-la-chicken-karaage-521286.jpg",
          instructions: "InstructionsPlace the chicken fillet cubes in a bowl. Add the rice wine, soy sauce, lemon juice and ginger. Mix well. Cover and allow to marinate in the fridge for about an hour.Heat the cooking oil.Dredge each piece of chicken in starch and cook in batches over medium-high heat. Depending on the size of your frying pan, you may need to cook all the chicken in three to four batches. If the temperature is correct, each batch should cook in about five minutes without the chicken pieces turning too dark.Drain the fried chicken fillets on a rack or a stack of kitchen paper. Transfer to a serving platter.Drizzle the mayo, mustard and Sriracha over the fried chicken. Sprinkle with finely sliced scallions.",
          pricePerServing: 313.47,
        }
      ]
    }
    const testState = storeSearchRecipes(defaultState, searchAction)
    const faveArray = Object.values(testState.recipes)
    expect(defaultState.recipes).to.not.exist
    expect(testState.recipes).to.exist
    expect(faveArray).to.have.length(2)
  })
})
