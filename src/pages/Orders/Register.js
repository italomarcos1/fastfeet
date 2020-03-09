import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';

import { Form } from '@rocketseat/unform';

import { TextInput as Input } from '~/components/Input';
import { Button } from '~/components/Button';

import AsyncSelect from '~/components/Select';

import api from '~/services/api';

export default function Register() {
  const schema = Yup.object().shape({
    recipient_name: Yup.string().required(),
    deliveryman_name: Yup.string().required(),
    product: Yup.string().required(),
  });

  const [deliverymen, setDeliverymen] = useState([]);
  const [recipients, setRecipients] = useState([]);

  function handleAdd(data) {
    console.tron.log(data.recipient);
    console.tron.log(data.deliverymen);
    console.tron.log(data.product);

    // disparar um alert ou toast informando o sucesso no cadasto
    // falta conferir o schema de validação
  }

  console.tron.log('rodou');

  useEffect(() => {
    async function loadSelect() {
      const [dmen, rcp] = await Promise.all([
        api.get('list'),
        api.get('recipients'),
      ]);
      console.tron.log(dmen.data);
      console.tron.log(rcp.data);
      setDeliverymen(dmen.data);
      setRecipients(rcp.data);
    }
    console.tron.log('fez o load');

    loadSelect();
  }, []);

  return (
    <>
      <header>
        <h1>Cadastro de Encomendas</h1>
        <aside>
          <Button>Voltar</Button>
          <Button className="save">Salvar</Button>
        </aside>
      </header>
      <Form onSubmit={handleAdd}>
        <div>
          <span>
            <strong>Destinatário</strong>
            <AsyncSelect
              name="recipient"
              type="text"
              data={recipients}
              placeholder="Nome do destinatário"
            />
          </span>
          <span>
            <strong>Entregador</strong>
            <AsyncSelect
              name="deliverymen"
              type="text" // existe um type 'select'?. conferir depois
              data={deliverymen}
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
        <button type="submit">clica ni eu</button>
      </Form>
    </>
  );
}
