import React, {Component} from 'react';
import Button from './Button';
import {Link} from 'react-router';

export default class CuisineSearch extends Component{
  constructor(){
    super();
    this.grabCuisine = this.grabCuisine.bind(this);
  }

  grabCuisine(title){
    let url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?cuisine=' + title + '&limitLicense=false&number=10&offset=0'
    fetch(url, {
        method: 'GET',
        headers: {
          'X-Mashape-Key': 'mCZGFaxu4ymsh4MortfuaV65gXRgp1VS83DjsnWmsxDi103FFH',
          'Accept': 'application/json'
        },
      })
      .then(response => response.json())
      .then(response => {
        let formatted = response.results.map(recipe => {
          recipe.image = 'https://spoonacular.com/recipeImages/' + recipe.image;
          return recipe;
        })
        this.props.storeSearchRecipes(formatted);
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
