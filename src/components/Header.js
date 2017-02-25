import React, {Component} from 'react';
import Button from './Button';
import {Link} from 'react-router';

export default class Header extends Component{

  render(){
    return (
      <header>
        <div className='mainNav'>
          <img className='logo' src={require('../styles/recipe-app-logo.png')} height='40px'></img>
          {/* <h1>Recipe Shmecipe</h1> */}
          <nav>
            <Link to='/favorites'>
            <Button
              title='The Fridge'
              className='nav-btn'/>
            </Link>
            <Link to='/favorites'>
              <Button
                title='The Cookbook'
                className='nav-btn'/>
            </Link>
            <Link to='/signin'>
              <Button
                title='Sign In'
                className='nav-btn'/>
            </Link>
          </nav>
        </div>
        <div className='subNav'>
          <Link>
            <Button
              title='search by ingredients'
              className='subNav-btn'/>
            </Link>
            <Link>
              <Button
                title='search by cuisine'
                className='subNav-btn'/>
              </Link>
            </div>
      </header>
    )
  }
}
