import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import isLogin from '../../utils/isLogin';

const PrivateRoute = ({component: Component, ...rest}) => {
  return (
    // only show component if user is logged in
    <Route {...rest} component={props => (
      isLogin() ?
        <Component {...props} /> :
        <Redirect to="/signup" />
    )} />
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
}

export default PrivateRoute
