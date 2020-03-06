import React from 'react';
import * as Yup from 'yup';

import { Form } from '@rocketseat/unform';

import { TextInput as Input } from '~/components/Input';
import { Button } from '~/components/Button';

import api from '~/services/api';

export default function Register() {
  const schema = Yup.object().shape({
    recipient_name: Yup.string().required(),
    deliveryman_name: Yup.string().required(),
    product: Yup.string().required(),
  });

  async function handleAdd(data) {
    console.tron.log(data);

    const response = await api.post('orders', data);

    console.tron.log(response.data);
  }

  return (
    <>
      <header>
        <h1>Cadastro de Encomendas</h1>
        <aside>
          <Button>Voltar</Button>
          <Button className="save" type="submit">
            Salvar
          </Button>
        </aside>
      </header>
      <Form onSubmit={handleAdd} schema={schema}>
        <div>
          <span>
            <strong>Destinatário</strong>
            <Input
              name="recipient_name"
              type="text"
              placeholder="Nome do destinatário"
            />
          </span>
          <span>
            <strong>Entregador</strong>
            <Input
              name="deliveryman_name"
              type="text"
              placeholder="Nome do entregador"
            />
          </span>
        </div>
        <div>
          <span>
            <strong>Nome do produto</strong>
            <Input name="product" type="text" placeholder="Nome do produto" />
          </span>
        </div>
        <button type="submit"> clica ni eu</button>
      </Form>
    </>
  );
}
