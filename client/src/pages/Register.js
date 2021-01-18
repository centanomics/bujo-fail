import React from 'react';

import RegisterForm from '../components/auth/RegisterForm';

import Layout from '../components/layout/Layout';

const Register = () => {
  return (
    <Layout>
      <main>
        <h1>Register</h1>
        <RegisterForm />
      </main>
    </Layout>
  );
};

export default Register;
