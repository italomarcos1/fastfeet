import React from 'react';
import { Form } from '@rocketseat/unform';

import { TextInput as Input } from '~/components/Input';

import { Button } from '~/components/Button';

export default function Edit() {
  return (
    <>
      <header>
        <h1>Edição de entregadores</h1>
        <aside>
          <Button>Voltar</Button>
          <Button className="save">Salvar</Button>
        </aside>
      </header>
      <Form>
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
      </Form>
    </>
  );
}
