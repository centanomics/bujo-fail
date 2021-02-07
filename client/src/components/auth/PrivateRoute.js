import React, { useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { loadUser } from '../../actions/authActions'
// import isLogin from '../../utils/isLogin';

const PrivateRoute = ({ component: Component, auth: { isAuthenticated }, loadUser, ...rest }) => {
  useEffect(() => {
    loadUser();
    //eslint-disable-next-line
  }, [])
  return (
    // only show component if user is logged in
    <Route {...rest} component={props => (
      isAuthenticated ?
        <Component {...props} /> :
        <Redirect to="/signup" />
    )} />
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  loadUser: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { loadUser }
)(PrivateRoute)
