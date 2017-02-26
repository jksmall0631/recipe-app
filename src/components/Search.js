import React, {Component} from 'react';

export default class Search extends Component{
  constructor(){
    super();
    this.state = {
      ingredients: '',
    }
  }

  grabNewRecipes(){
    const url = ('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=' + this.state.ingredients +'%2Cflour%2Csugar&limitLicense=false&number=1&ranking=1')
    console.log(url)
    fetch(url, {
      method: 'GET',
      headers: {
        'X-Mashape-Key': 'mCZGFaxu4ymsh4MortfuaV65gXRgp1VS83DjsnWmsxDi103FFH',
        'Accept': 'application/json'
      },
    })
    .then(response => response.json())
    .then(response => console.log(response))
  }

  render(){
    return (
      <div>
        <input
          placeholder='kale, butter, ...'
          onChange={(e) => {this.setState({ingredients: e.target.value})}}
          value={this.state.ingredients}>
        </input>
        <button
          onClick={() => {this.grabNewRecipes}}>
          Submit
        </button>
      </div>
    )
  }
}
