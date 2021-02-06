import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import { loadUser } from '../actions/authActions'

import Layout from '../components/layout/Layout';
import BulletList from '../components/bullets/BulletList';

const Main = ({ loadUser }) => {
  useEffect(() => {
    //loadUser()
    //eslint-disable-next-line
  }, [])
  return (
    <Layout>
      <main>
        <h1>Enter A Task Below</h1>
        <BulletList />
      </main>
    </Layout>
  );
};

Main.propTypes = {
  loadUser: PropTypes.func.isRequired,
}

export default connect(
  null,
  { loadUser }
)(Main);
