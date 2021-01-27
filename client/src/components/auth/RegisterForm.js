import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import { registerUser } from '../../actions/authActions'

const RegisterForm = ({ registerUser }) => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
  });

  const { firstName, lastName, email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    registerUser(user)
  }

  return (
    <form className="registerForm" onSubmit={onSubmit}>
      <div>
        <h2>Name</h2>
        <div>
          <input
            type="text"
            name="firstName"
            id="firstName"
            autoComplete="given-name"
            placeholder="First Name"
            onChange={onChange}
            value={firstName}
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            autoComplete="family-name"
            placeholder="Last Name"
            onChange={onChange}
            value={lastName}
          />
        </div>
      </div>
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
        <h2>Confirm Password</h2>
        <input
          type="password"
          name="password2"
          id="password2"
          autoComplete="new-password"
          placeholder="Confirm Password"
          onChange={onChange}
          value={password2}
        />
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  )
}

RegisterForm.propTypes = {
  registerUser: PropTypes.func.isRequired,
}

export default connect(
  null,
  {
    registerUser
  }
)(RegisterForm)
