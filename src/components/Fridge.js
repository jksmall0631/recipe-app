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
        <li>
          <img src={grocery.grocery.images[2]}></img>
          <h4>{grocery.grocery.title}</h4>
        </li>
      )
    })
  }

  render(){
    return (
      <section className="fridge">
        <h1>What's in your fridge, yo?</h1>
        {/* <input
          placeholder='item'
          onChange={(e) => this.setState({item: e.target.value})}
          value={this.state.item}>
        </input>
        <input
          placeholder='quantity'
          onChange={(e) => this.setState({quantity: e.target.value})}
          value={this.state.quantity}>
        </input>
        <button>Submit</button><br></br> */}
        <Link to='/scan'>
          <button>Scan</button>
        </Link>
        {this.displayGroceries()}
      </section>
    )
  }
}
