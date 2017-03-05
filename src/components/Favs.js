import React, {Component} from 'react';
import Recipe from './Recipe';
import {removeFav} from '../firebase';

export default class Favs extends Component{
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
    this.props.moveToSingle(recipe);
  }

  renderFavs(){
    let favs;
    if(this.props.favs){
      favs = this.props.favs.map(recipe => {
        return (
          <li key={recipe.id} className='recipe'>
            <Recipe key={recipe.id} recipe={recipe} addDeleteFav={this.deleteFav} moveToSingle={this.moveToSingle} user={this.props.user} symbol='-'/>
          </li>
        )
      })
    }
    return favs;
  }

  render(){
    return (
      <section className='recipe-cont'>
        <ul className='recipes'>
          {this.renderFavs()}
        </ul>
      </section>
    )
  }
}
