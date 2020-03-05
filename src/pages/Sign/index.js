import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { signInRequest } from '~/store/modules/auth/actions';

// import logo from '~/assets/fastfeet-logo@2x.png';

export default function Sign() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    console.tron.log('disparar...');
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      {/* <img src={logo} alt="FastFeet" /> */}
      <Form onSubmit={handleSubmit}>
        {/* <h1>email</h1> */}
        <Input name="email" type="email" placeholder="exemplo@email.com" />
        {/* <h1>senha</h1> */}

        <Input name="password" type="password" placeholder="**********" />
        <button type="submit">Entrar no sistema</button>
      </Form>
    </>
  );
}
