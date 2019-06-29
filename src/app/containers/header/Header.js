import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Menu from '../../components/menu/Menu';
import './header.scss';

class Header extends Component {
    render() {
      return (
        <header className='header'>
          <Menu />
          <Link to='/' className='logo'>
            <span className='brand'>bennett</span>
          </Link>
          <div className='shop-cart'>
            <span><i className='fas fa-shopping-bag'></i></span>
          </div>
        </header>
      );
    }
  }
  
  export default Header;
  