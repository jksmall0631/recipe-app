import React, {Component} from 'react';
import Button from './Button';
import {Link} from 'react-router';

export default class SignIn extends Component{
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return (
      <section>
        <input></input>
        <input></input>
        <input></input>
        <Link to='/'>
          <Button
            title='Submit'
            onClick={this.handleSignIn}/>
        </Link>
      </section>
    )
  }
}
