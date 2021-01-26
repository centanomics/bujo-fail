import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import isLogin from '../../utils/isLogin';

const PrivateRoute = ({component: Component, auth: {token}, ...rest}) => {
  return (
    // only show component if user is logged in
    <Route {...rest} component={props => (
      token ?
        <Component {...props} /> :
        <Redirect to="/signup" />
    )} />
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  null
)(PrivateRoute)
