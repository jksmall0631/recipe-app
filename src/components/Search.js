import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Search extends Component{
  constructor(){
    super();
    this.state = {
      ingredients: '',
    }
    this.grabNewRecipes = this.grabNewRecipes.bind(this);
  }

  grabNewRecipes(){
    let formattedIngredients = this.state.ingredients.replace(', ', '%2C')
    const url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?addRecipeInformation=true&instructionsRequired=true&includeIngredients=' + formattedIngredients + '&limitLicense=false&number=24&offset=0&ranking=1'
    fetch(url, {
      method: 'GET',
      headers: {
        'X-Mashape-Key': 'mCZGFaxu4ymsh4MortfuaV65gXRgp1VS83DjsnWmsxDi103FFH',
        'Accept': 'application/json'
      },
    })
    .then(response => response.json())
    .then(response => this.props.storeSearchRecipes(response.results))
  }

  render(){
    return (
      <div className='search'>
        <input
          placeholder='kale, butter, ...'
          onChange={(e) => {this.setState({ingredients: e.target.value})}}
          value={this.state.ingredients}>
        </input>
        <Link to='/searched'>
          <button
            onClick={() => {this.grabNewRecipes()}}>
            Submit
          </button>
        </Link>
      </div>
    )
  }
}
