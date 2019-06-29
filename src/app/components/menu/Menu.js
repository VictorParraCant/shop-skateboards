import React from 'react';

import './menu.scss';

const Menu = () => (
  <nav className='menu'>
    <ul className='menu-links'>
      <li className='link'><i className="fas fa-bars"></i> categories</li>
      <li className='link'>about</li>
      <li className='link'>contact</li>
      <li>
        <i className="fas fa-search"></i>
        <input className='browser' placeholder='search'/>
      </li>
    </ul>
  </nav>
);

export default Menu;
