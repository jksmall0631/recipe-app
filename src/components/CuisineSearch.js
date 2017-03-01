import React, {Component} from 'react';
import Button from './Button';
import {Link} from 'react-router';

export default class CuisineSearch extends Component{
  constructor(){
    super();
    this.grabCuisine = this.grabCuisine.bind(this);
  }

  grabCuisine(title){
    const url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=24&tags=' + title;
    fetch(url, {
        method: 'GET',
        headers: {
          'X-Mashape-Key': 'mCZGFaxu4ymsh4MortfuaV65gXRgp1VS83DjsnWmsxDi103FFH',
          'Accept': 'application/json'
        },
      })
      .then(response => response.json())
      .then(response => {
        this.props.storeSearchRecipes(response.recipes);
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
      <div className='cuisine-search'>
        {this.displayButtons()}
      </div>
    )
  }
}

// https://spoonacular.com/recipeImages/
