import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const links = ['about', 'login', 'signup'];

  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li>
            <NavLink
              to={`/${link}`}
              className={link}
              activeClassName={`${link}-active`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
