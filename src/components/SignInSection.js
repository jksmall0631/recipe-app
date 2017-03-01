import React, {Component} from 'react';
import {signIn} from '../firebase';
import Button from './Button';
import {Link} from 'react-router';
import firebase from 'firebase';


export default class SignInSection extends Component{
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
    }
    this.login = this.login.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  login(){
    signIn(this.state.email, this.state.password);
    this.getUser();
  }

  getUser() {
    firebase.auth().onAuthStateChanged((user) => {
      this.props.setUser(user.email, user.uid)
    }).bind(this);
  }

  render(){
    return (
      <section className='sign-in'>
        <h1>Sign In</h1>
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
            className='login'
            onClick={this.login}/>
        </Link>
      </section>
    )
  }
}
