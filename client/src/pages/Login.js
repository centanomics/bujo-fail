import React from 'react';

import Layout from '../components/layout/Layout';
import LoginForm from '../components/auth/LoginForm';

const Login = () => {
  return (
    <Layout>
      <main>
        <h1>Login</h1>
        <LoginForm />
      </main>
    </Layout>
  );
};

export default Login;
