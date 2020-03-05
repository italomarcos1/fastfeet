import React from 'react';
import { Form, Input } from '@rocketseat/unform';

export default function Edit() {
  return (
    <>
      <header>
        <h1>Edição de destinatário</h1>
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
      </Form>
    </>
  );
}
