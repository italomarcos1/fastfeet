import React from 'react';
import { Form, Input } from '@rocketseat/unform';

export default function Register() {
  return (
    <>
      <header>
        <h1>Cadastro de Encomendas</h1>
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
            <Input
              name="recipient"
              type="text"
              placeholder="Nome do destinatário"
            />
          </span>
          <span>
            <strong>Entregador</strong>
            <Input
              name="deliverymen"
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
