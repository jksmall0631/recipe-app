import React, {Component} from 'react';
import {signIn} from '../firebase';
import Button from './Button';
import {Link} from 'react-router';


export default class SignInSection extends Component{
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
    }
  }

  render(){
    return (
      <section>
        <input
          placeholder='Email'
          onChange={(e) => {this.setState({email: e.target.value})}}
          value={this.state.email}>
        </input>
        <input
          placeholder='Password'
          onChange={(e) => {this.setState({password: e.target.value})}}
          value={this.state.password}>
        </input>
        <Link to='/'>
          <Button
            title='Submit'
            onClick={() => signIn(this.state.email, this.state.password)}/>
        </Link>
      </section>
    )
  }
}
