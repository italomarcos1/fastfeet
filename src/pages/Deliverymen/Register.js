import React from 'react';
import { Form, Input } from '@rocketseat/unform';

export default function Register() {
  return (
    <>
      <header>
        <h1>Cadastro de Entregadores</h1>
        <aside>
          <button type="button">Voltar</button>
          <button type="button" className="save">
            Salvar
          </button>
        </aside>
      </header>
      <Form>
        <img
          src="https://api.adorable.io/avatars/100/abott@adorable.png"
          alt="abott"
          width="100px"
          height="100px"
        />
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
