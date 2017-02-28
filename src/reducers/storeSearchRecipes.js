const storeRecipes = (state = {}, action) => {
  switch(action.type){
    case 'STORE_SEARCH_RECIPES':
    action.recipes.forEach(recipe => {
      let ingredients = [];
      let steps = [];
      recipe.analyzedInstructions[0].steps.forEach(step => {
        steps.push(step.step);
        step.ingredients.forEach(ingredient => {
          ingredients.push({originalString: ingredient.name, id: ingredient.id})
        })
      })
      let formattedSteps = steps.join( )
      recipe.instructions = formattedSteps;
      recipe.extendedIngredients = ingredients
      return recipe;
    })
      return Object.assign({}, state, {recipes: action.recipes})
    default:
      return state;
  }
}

export default storeRecipes;
