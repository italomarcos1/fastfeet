import React from 'react';
import { Form } from '@rocketseat/unform';

import { TextInput as Input } from '~/components/Input';
import { Button } from '~/components/Button';

export default function Edit() {
  return (
    <>
      <header>
        <h1>Edição de encomendas</h1>
        <aside>
          <Button>Voltar</Button>
          <Button className="save">Salvar</Button>
        </aside>
      </header>
      <Form>
        <div>
          <span>
            <strong>Destinatário</strong>
            <Input name="name" type="text" placeholder="Nome do entregador" />
          </span>
          <span>
            <strong>Entregador</strong>
            <Input
              name="deliveryman"
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
      </Form>
    </>
  );
}
