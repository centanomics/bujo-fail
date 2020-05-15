import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>Sign up</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default Nav;
