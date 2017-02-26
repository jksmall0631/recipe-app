import React, {Component} from 'react';
import Button from './Button';

export default class CuisineSearch extends Component{
  constructor(){
    super();
    this.grabCuisine = this.grabCuisine.bind(this);
  }

  grabCuisine(title){
    let url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?cuisine=' + title + '&limitLicense=false&number=1&offset=0'
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

  displayButtons(){
    let array = ['african', 'chinese', 'japanese', 'korean', 'vietnamese', 'thai', 'indian', 'british', 'irish', 'french', 'italian', 'mexican', 'spanish', 'middle eastern', 'jewish', 'american', 'cajun', 'southern', 'greek', 'german', 'nordic', 'eastern european', 'caribbean', 'latin american'];
    let buttonArray = array.map(cuisine => {
      return (
        <Button
          key={cuisine}
          title={cuisine}
          className='cuisine-btn'
          onClick={this.grabCuisine}/>
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
