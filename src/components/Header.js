import React, {Component} from 'react';
import Button from './Button';
import Search from '../containers/Search';
import CuisineSearch from '../containers/CuisineSearch';
import {Link} from 'react-router';
import {signOut} from '../firebase';
import {browserHistory} from 'react-router';

export default class Header extends Component{
  constructor(){
    super();
    this.state = {
      showSearch: false,
      showCuisine: false,
      showError: false,
    }
    this.expandSearch = this.expandSearch.bind(this);
    this.expandCuisine = this.expandCuisine.bind(this);
    this.goToCookbook = this.goToCookbook.bind(this);
    this.goToFridge = this.goToFridge.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  expandSearch(){
    this.setState({showSearch: !this.state.showSearch})
  }

  expandCuisine(){
    this.setState({showCuisine: !this.state.showCuisine})
  }

  goToCookbook(){
    if(this.props.user.email){
      browserHistory.push('/favorites');
    }else{
      this.setState({showError: !this.state.showError})
    }
  }

  goToFridge(){
    if(this.props.user.email){
      browserHistory.push('/fridge');
    }else{
      this.setState({showError: !this.state.showError})
    }
  }

  signOut(){
    signOut();
    this.props.signOut()
  }

  render(){
    return (
      <header>
        <div className='mainNav'>
          <Link to='/'>
            <img className='logo' src={require('../styles/recipe-app-logo.png')} height='40px' alt='chef hat logo'></img>
          </Link>
          <nav>
            {/* <Link to='/fridge'> */}
            <Button
            title='The Fridge'
            className='nav-btn'
            onClick={this.goToFridge}/>
            {/* <button className='nav-btn'>
              The Fridge
            </button>
            </Link> */}
            {/* <Link to='/favorites'> */}
              <Button
              title='The Cookbook'
              className='nav-btn'
              onClick={this.goToCookbook}/>
              {/* <button className='nav-btn'>
                The Cookbook
              </button> */}
            {/* </Link> */}
            {this.props.user.email ?
              <Button
              title='Sign Out'
              className='nav-btn'
              onClick={this.signOut}/>
            :
              <Link to='/signin'>
                <button className='nav-btn'>
                  Sign in
                </button>
              </Link>
            }
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
          {/* {this.state.showError && !this.props.user.email && <p className='error'>Please Sign In</p>} */}
        </div>
      </header>
    )
  }
}
