import React from 'react';
import { Form, Input } from '@rocketseat/unform';

export default function Edit() {
  return (
    <>
      <header>
        <h1>Edição de entregadores</h1>
        <aside>
          <button type="button">Voltar</button>
          <button type="button" className="save">
            Salvar
          </button>
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
