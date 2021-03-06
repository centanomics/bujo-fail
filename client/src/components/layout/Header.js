import React from 'react';
import { Link } from 'react-router-dom';

import Nav from './Nav';

// header component with nav and link to home page
const Header = () => {
  return (
    <header>
      <Link to='/' className='logo'>
        <h1>Bujo</h1>
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
