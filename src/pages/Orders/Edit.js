import React from 'react';
import { Form, Input } from '@rocketseat/unform';

export default function Edit() {
  return (
    <>
      <header>
        <h1>Edição de encomendas</h1>
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
