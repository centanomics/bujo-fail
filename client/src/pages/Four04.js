import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../components/layout/Layout';

const Four04 = () => {
  return (
    <Layout>
      <main>
        <h1>Four04</h1>
        <Link to='/'>Go back to safety</Link>
      </main>
    </Layout>
  );
};

export default Four04;
