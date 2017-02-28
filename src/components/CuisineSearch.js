import React, {Component} from 'react';
import Button from './Button';
import {Link} from 'react-router';

export default class CuisineSearch extends Component{
  constructor(){
    super();
    this.grabCuisine = this.grabCuisine.bind(this);
  }

//This function makes the call to the api and formats the return so it may be rendered in the 'single' component
  grabCuisine(title){
    const url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?addRecipeInformation=true&cuisine=' + title + '&instructionsRequired=true&limitLicense=false&number=10&offset=0&ranking=1'
    fetch(url, {
        method: 'GET',
        headers: {
          'X-Mashape-Key': 'mCZGFaxu4ymsh4MortfuaV65gXRgp1VS83DjsnWmsxDi103FFH',
          'Accept': 'application/json'
        },
      })
      .then(response => response.json())
      .then(response => {
        // response.results.forEach(recipe => {
        //   let ingredients = [];
        //   let steps = [];
        //   recipe.analyzedInstructions[0].steps.forEach(step => {
        //     steps.push(step.step);
        //     step.ingredients.forEach(ingredient => {
        //       // console.log(ingredient)
        //       ingredients.push({originalString: ingredient.name, id: ingredient.id})
        //     })
        //   })
        //   let formattedSteps = steps.join( )
        //   recipe.instructions = formattedSteps;
        //   recipe.extendedIngredients = ingredients
        //   return recipe;
        // })
        this.props.storeSearchRecipes(response.results);
      })
  }

  displayButtons(){
    let array = ['african', 'chinese', 'japanese', 'korean', 'vietnamese', 'thai', 'indian', 'british', 'irish', 'french', 'italian', 'mexican', 'spanish', 'middle eastern', 'jewish', 'american', 'cajun', 'southern', 'greek', 'german', 'nordic', 'eastern european', 'caribbean', 'latin american'];
    let buttonArray = array.map(cuisine => {
      return (
        <Link key={cuisine} to='/searched'>
          <Button
            key={cuisine}
            title={cuisine}
            className='cuisine-btn'
            onClick={this.grabCuisine}/>
        </Link>
      )
    })
    return buttonArray;
  }

  render(){
    return (
      <div>
        {this.displayButtons()}
      </div>
    )
  }
}

// https://spoonacular.com/recipeImages/
