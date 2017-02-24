import React, {Component} from 'react';
import Button from './Button';
import {Link} from 'react-router';

export default class Header extends Component{

  render(){
    return (
      <header>
        <h1>Recipe Shmecipe</h1>
        <Link to='/signin'>
          Sign In
          {/* <Button
            title='Sign In'/> */}
        </Link>
        <Link to='/favorites'>
          Cookbook
          {/* <Button
            title='Cookbook'/> */}
        </Link>
      </header>
    )
  }
}
