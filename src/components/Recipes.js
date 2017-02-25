import React, {Component} from 'react';
import Recipe from './Recipe';

export default class Recipes extends Component{
  constructor(){
    super();
    this.state = {
      ingredients: '',
    }
    this.addFav = this.addFav.bind(this);
  }
  //DONT DELETE!!!!!!!!!!!!!!!!!!!!!!!!!
  // componentDidMount(){
  //   // this.getCurrentUser();
  //   const url = ('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=10')
  //
  //   fetch(url, {
  //     method: 'GET',
  //     headers: {
  //       'X-Mashape-Key': 'mCZGFaxu4ymsh4MortfuaV65gXRgp1VS83DjsnWmsxDi103FFH',
  //       'Accept': 'application/json'
  //     },
  //   })
  //   .then(response => response.json())
  //   .then(response => this.props.storeRecipes(response.recipes))
  // }

  grabNewRecipes(){
    const url = ('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=' + this.state.ingredients +'%2Cflour%2Csugar&limitLicense=false&number=10&ranking=1')
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

  addFav(recipe) {
    this.props.addFav(recipe);
  }

  renderRecipes(){
    let recipes;
    if(this.props.recipes){
      recipes = this.props.recipes.map(recipe => {
        return (
          <li key={recipe.id}>
            <Recipe recipe={recipe} addFav={this.addFav}/>
          </li>
        )
      })
    }
    return recipes;
  }

  render(){
    return (
      <section>
        {this.props.children}
        <input
          placeholder='Ingredient'
          onChange={(e) => {this.setState({ingredients: e.target.value})}}
          value={this.state.ingredients}>
        </input>
        <button
          onClick={() => {this.grabNewRecipes()}}>
          Submit
        </button>
        <ul>
          {this.renderRecipes()}
        </ul>
      </section>
    )
  }
}
