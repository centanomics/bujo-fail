import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Nav = ({auth: { isAuthenticated }}) => {
  const links = !isAuthenticated ? ['about', 'login', 'signup'] : ['about', 'logout'];

  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link}>
            <NavLink
              to={`/${link}`}
              className={`${link} navlink`}
              activeClassName={`${link}-active active`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
})

export default connect(
  mapStateToProps,
  null
)(Nav);
