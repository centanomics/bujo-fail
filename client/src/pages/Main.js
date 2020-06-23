import React from 'react';

import Layout from '../components/layout/Layout';
import BulletList from '../components/bullets/BulletList';

const Main = () => {
  return (
    <Layout>
      <main>
        <h1>Enter A Task Below</h1>
        <BulletList />
      </main>
    </Layout>
  );
};

export default Main;
