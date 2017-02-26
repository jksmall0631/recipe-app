import React, {Component} from 'react';
import Button from './Button';
import Search from './Search';
import CuisineSearch from './CuisineSearch';
import {Link} from 'react-router';

export default class Header extends Component{
  constructor(){
    super();
    this.state = {
      showSearch: false,
      showCuisine: false,
    }
    this.expandSearch = this.expandSearch.bind(this);
    this.expandCuisine = this.expandCuisine.bind(this);
  }

  expandSearch(){
    this.setState({showSearch: !this.state.showSearch})
  }

  expandCuisine(){
    this.setState({showCuisine: !this.state.showCuisine})
  }

  render(){
    return (
      <header>
        <div className='mainNav'>
          <img className='logo' src={require('../styles/recipe-app-logo.png')} height='40px'></img>
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
        {this.state.showSearch && <Search />}
        {this.state.showCuisine && <CuisineSearch />}
        <div className='subNav'>
          <Link>
            <Button
              title='search by ingredients'
              className='subNav-btn'
              onClick={this.expandSearch}/>
            </Link>
            <Link>
              <Button
                title='search by cuisine'
                className='subNav-btn'
                onClick={this.expandCuisine}/>
              </Link>
            </div>
      </header>
    )
  }
}
