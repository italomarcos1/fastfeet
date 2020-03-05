import React from 'react';
import { Form } from '@rocketseat/unform';

import { TextInput as Input } from '~/components/Input';
import { Button } from '~/components/Button';

export default function Register() {
  return (
    <>
      <header>
        <h1>Cadastro de destinatários</h1>
        <aside>
          <Button>Voltar</Button>
          <Button className="save">Salvar</Button>
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
