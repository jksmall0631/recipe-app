import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Fridge extends Component{
  constructor(){
    super();
    this.state = {
      item: '',
      quantity: '',
    }
  }

  displayGroceries(){
    return this.props.groceries.map(grocery => {
      return (
        <div>
          <img src={grocery.grocery.images[2]}></img>
          <h4>{grocery.grocery.title}</h4>
        </div>
      )
    })
  }

  render(){
    return (
      <section className="fridge">
        <h1>What's in your fridge, yo?</h1>
        <Link to='/scan'>
          <button>Scan</button>
        </Link>
        {this.displayGroceries()}
      </section>
    )
  }
}
