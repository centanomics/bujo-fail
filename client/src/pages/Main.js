import React from 'react';

import Layout from '../components/layout/Layout';
import BulletList from '../components/bullets/BulletList';

const Main = () => {
  return (
    <Layout>
      <main>
        <h1>Main</h1>
        <BulletList />
      </main>
    </Layout>
  );
};

export default Main;
