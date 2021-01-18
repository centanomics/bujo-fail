import React, {useState} from 'react'
import PropTypes from 'prop-types'

const RegisterForm = props => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
  });

  const { firstName, lastName, email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  return (
    <form>
      <div>
        <h2>Name</h2>
        <input
          type="text"
          name="firstName"
          id="firstName"
          autocomplete="given-name"
          placeholder="First Name"
          onChange={onChange}
          value={firstName}
        />
        <input
          type="text"
          name="lastName"
          id="lastName"
          autocomplete="family-name"
          placeholder="Last Name"
          onChange={onChange}
          value={lastName}
        />
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
    </form>
  )
}

RegisterForm.propTypes = {

}

export default RegisterForm
