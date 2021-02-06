import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { login } from '../../actions/authActions';

const LoginForm = ({ login, auth: { isAuthenticated } }) => {

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    login(user);
  }

  return (
    <form className="registerForm" onSubmit={onSubmit}>
      { isAuthenticated ? <Redirect to="/" /> : ''}
      <div>
        <h2>Email</h2>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          placeholder="Email"
          onChange={onChange}
          value={email}
        />
      </div>
      <div>
        <h2>Password</h2>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="new-password"
          placeholder="Password"
          onChange={onChange}
          value={password}
        />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  )
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps,
  { login }
)(LoginForm)
