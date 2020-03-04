import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { signInRequest } from '~/store/modules/auth/actions';

export default function Sign() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    console.tron.log('disparar...');
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="exemplo@email.com" />
        <Input name="password" type="password" placeholder="**********" />
        <button type="submit">Entrar</button>
      </Form>
    </>
  );
}
