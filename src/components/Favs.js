import React, {Component} from 'react';
import Recipe from './Recipe';
import {removeFav} from '../firebase';

export default class Recipes extends Component{
  constructor(){
    super();
    this.state = {
    }
    this.deleteFav = this.deleteFav.bind(this);
    this.moveToSingle = this.moveToSingle.bind(this);
  }

  deleteFav(recipe){
    this.props.deleteFav(recipe);
    removeFav(this.props.user, recipe.id);
  }

  moveToSingle(recipe){
    console.log(this.props)
    this.props.moveToSingle(recipe);
  }

  renderFavs(){
    let favs;
    if(this.props.favs){
      favs = this.props.favs.map(recipe => {
        return (
          <li key={recipe.id}>
            <Recipe recipe={recipe} moveToSingle={this.moveToSingle} addDeleteFav={this.deleteFav}/>
          </li>
        )
      })
    }
    return favs;
  }

  render(){
    return (
      <section>
        <ul>
          {this.renderFavs()}
        </ul>
      </section>
    )
  }
}
