import React, {Component} from 'react';
import Recipe from './Recipe';

export default class Recipes extends Component{
  constructor(){
    super();
    this.state = {
    }
  }

  renderFavs(){
    let favs;
    if(this.props.favs){
      favs = this.props.favs.map(recipe => {
        return (
          <li key={recipe.recipe.id}>
            <Recipe recipe={recipe.recipe} addFav={this.addFav}/>
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
