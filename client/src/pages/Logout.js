import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'

import { logout } from '../actions/authActions'

import Layout from '../components/layout/Layout'

const Logout = ({ logout }) => {
  useEffect(() => {
    logout();
    //eslint-disable-next-line
  }, [])

  return (
    <Layout>
      <Redirect to="/signup" />
    </Layout>
  )
}

Logout.propTypes = {
  logout: PropTypes.func.isRequired,
}

export default connect(
  null,
  { logout }
)(Logout)
