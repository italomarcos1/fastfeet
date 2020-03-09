import React from 'react';
import * as Yup from 'yup';

import { Form } from '@rocketseat/unform';

import { TextInput as Input } from '~/components/Input';
import { Button } from '~/components/Button';

import api from '~/services/api';

export default function Register() {
  const schema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .required()
      .min(6),
    confirmPassword: Yup.string()
      .min(6)
      .when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
  });

  async function handleAdd(data) {
    console.tron.log(data);

    const response = await api.post('register', data);

    console.tron.log(response.data);
  }
  return (
    <>
      <header>
        <h1>Cadastro de Entregadores</h1>
        <aside>
          <Button>Voltar</Button>
          <Button className="save">Salvar</Button>
        </aside>
      </header>
      <Form onSubmit={handleAdd} schema={schema}>
        <img
          src="https://api.adorable.io/avatars/100/abott@adorable.png"
          alt="abott"
          width="100px"
          height="100px"
        />
        <div>
          <span>
            <strong>Nome</strong>
            <Input name="name" type="text" placeholder="Nome do entregador" />
          </span>
        </div>
        <div>
          <span>
            <strong>Email</strong>
            <Input
              name="email"
              type="email"
              placeholder="E-mail do entregador"
            />
          </span>
        </div>
        <div>
          <span>
            <strong>Senha</strong>
            <Input
              name="password"
              type="password"
              placeholder="Defina uma senha"
            />
          </span>
        </div>
        <div>
          <span>
            <strong>Confirme a senha</strong>
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirme a senha informada"
            />
          </span>
        </div>
        <button type="submit"> clica aki</button>
      </Form>
    </>
  );
}
