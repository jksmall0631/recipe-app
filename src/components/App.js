import React, {Component} from 'react';
import Header from '../containers/Header';
import {getFavs} from '../firebase';

export default class App extends Component{

  componentDidMount(){
    const url = ('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=24')

    fetch(url, {
      method: 'GET',
      headers: {
        'X-Mashape-Key': 'mCZGFaxu4ymsh4MortfuaV65gXRgp1VS83DjsnWmsxDi103FFH',
        'Accept': 'application/json'
      },
    })
    .then(response => response.json())
    .then(response => {
      this.props.storeRecipes(response.recipes)
    })
  }

  componentWillUpdate(){
    if(this.props.user){
      getFavs(this.props.user).on('value', (info) => {
        if(info.val()){
          this.props.getFavs(info.val())
        }
      })
    }
  }

  render(){
    return (
      <section>
        <Header />
        {this.props.children}
      </section>
    )
  }
}
