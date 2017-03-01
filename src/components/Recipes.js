import React, {Component} from 'react';
import Recipe from './Recipe';
import {sendFav} from '../firebase';

export default class Recipes extends Component{
  constructor(){
    super();

    this.addFav = this.addFav.bind(this);
    this.moveToSingle = this.moveToSingle.bind(this);
  }

  addFav(recipe){
    this.props.addFav(recipe);
    sendFav(this.props.user, recipe.id, recipe);
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
            <Recipe recipe={recipe} addDeleteFav={this.addFav} moveToSingle={this.moveToSingle} user={this.props.user}/>
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
