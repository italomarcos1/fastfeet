import React, { useEffect, useState } from 'react';
import { Form } from '@rocketseat/unform';

import { TextInput as Input } from '~/components/Input';
import { Button } from '~/components/Button';

import AsyncSelect from '~/components/Select';
import api from '~/services/api';

export default function Edit() {
  const [recipients, setRecipients] = useState([]);
  const [deliverymen, setDeliverymen] = useState([]);

  function handleEdit({ recipient, deliverymen: dman, product }) {
    console.tron.log(recipient);
    console.tron.log(dman);
    console.tron.log(product);
  }

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

    loadSelect();
  }, []);

  return (
    <>
      <header>
        <h1>Edição de encomendas</h1>
        <aside>
          <Button>Voltar</Button>
          <Button className="save">Salvar</Button>
        </aside>
      </header>
      <Form onSubmit={handleEdit}>
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
        <button type="submit">Clique aqui</button>
      </Form>
    </>
  );
}
