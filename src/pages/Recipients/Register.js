import React from 'react';
import * as Yup from 'yup';

import { Form } from '@rocketseat/unform';

import { TextInput as Input } from '~/components/Input';
import { Button } from '~/components/Button';

import api from '~/services/api';

export default function Register() {
  const schema = Yup.object().shape({
    name: Yup.string().required(),
    number: Yup.string().required(),
    street: Yup.string().required(),
    complement: Yup.string().required(),
    city: Yup.string().required(),
    state: Yup.string().required(),
    cep: Yup.string().required(),
  });

  async function handleAdd(data) {
    console.tron.log(data);

    const response = await api.post('add', data);

    console.tron.log(response.data);
  }
  return (
    <>
      <header>
        <h1>Cadastro de destinatários</h1>
        <aside>
          <Button>Voltar</Button>
          <Button className="save">Salvar</Button>
        </aside>
      </header>
      <Form onSubmit={handleAdd} schema={schema}>
        <div>
          <span>
            <strong>Nome</strong>
            <Input name="name" type="text" placeholder="Insira seu nome" />
          </span>
        </div>

        <div>
          <span>
            <strong>Rua</strong>
            <Input name="street" type="text" placeholder="Nome da rua" />
          </span>
          <span>
            <strong>Número</strong>
            <Input name="number" type="text" placeholder="Nº da rua" />
          </span>
          <span>
            <strong>Complemento</strong>
            <Input name="complement" type="text" placeholder="Complemento" />
          </span>
        </div>

        <div>
          <span>
            <strong>Cidade</strong>
            <Input name="city" type="text" placeholder="Nome da cidade" />
          </span>
          <span>
            <strong>Estado</strong>
            <Input name="state" type="text" placeholder="Estado" />
          </span>
          <span>
            <strong>CEP</strong>
            <Input name="cep" type="text" placeholder="Informe o CEP" />
          </span>
        </div>
        <button type="submit">clica ni eu</button>
      </Form>
    </>
  );
}
