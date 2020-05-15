import React from 'react';
import { Link } from 'react-router-dom';

import Nav from './Nav';

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <h1>Bujo</h1>
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
