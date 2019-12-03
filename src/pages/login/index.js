import React from 'react';
import Form from '../../components/Form';

function LoginPage() {
  const handleSubmit = values => {
    console.log(values);
  };
  return <Form handleSubmitForm={handleSubmit} />;
}

export default LoginPage;
