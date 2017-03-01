import React, {Component} from 'react';
import Recipe from './Recipe';

//This component was necessary in addition to the Recipes component because of
//how the data comes back from the api with different calls.
export default class SearchRecipes extends Component{
  constructor(){
    super();
    this.addFav = this.addFav.bind(this);
    this.moveToSingle = this.moveToSingle.bind(this);
  }

  addFav(recipe){
    this.props.addFav(recipe);
  }

  moveToSingle(recipe){
    this.props.moveToSingle(recipe);
  }

  renderRecipes(){
    let recipes;
    if(this.props.recipes){
      recipes = this.props.recipes.map(recipe => {
        return (
          <li key={recipe.id} className='recipe'>
            <Recipe recipe={recipe} addFav={this.addFav} moveToSingle={this.moveToSingle}/>
          </li>
        )
      })
    }
    return recipes;
  }

  render(){
    return (
      <section className='recipe-cont'>
        <ul className='recipes'>
          {this.renderRecipes()}
        </ul>
      </section>
    )
  }
}
