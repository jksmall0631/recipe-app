import React, {Component} from 'react';
import {signUp} from '../firebase';
import Button from './Button';
import firebase from 'firebase';

export default class SignUpSection extends Component{
  constructor(){
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
    }
  }

  handleSignUp(){
    signUp(this.state.email, this.state.password);
    this.getUser();
  }

  getUser() {
    firebase.auth().onAuthStateChanged((user) => {
      this.props.setUser(user.email, user.uid)
    }).bind(this);
  }

  render(){
    return (
      <section className='sign-up'>
        <h1>Sign Up</h1>
        <input
          placeholder='Name'
          onChange={(e) => {this.setState({name: e.target.value})}}
          value={this.state.name}>
        </input>
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
        {/* <Link to='/'> */}
          <Button
            title='Submit'
            onClick={() => this.handleSignUp()}/>
        {/* </Link> */}
      </section>
    )
  }
}
