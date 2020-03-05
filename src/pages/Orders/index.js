import React from 'react';
import { FaOptinMonster } from 'react-icons/fa';
import { TextInput as Input } from '~/components/Input';
import { Button } from '~/components/Button';

import { Status } from '~/pages/_layouts/Managing/styles';

export default function Orders() {
  return (
    <>
      <header>
        <h1>Gerenciando encomendas</h1>
        <div>
          <aside>
            <Input
              name="search"
              type="text"
              placeholder="Buscar por encomendas"
            />
            <Button className="save">Cadastrar</Button>
          </aside>
        </div>
      </header>
      <div>
        <header>
          <strong>ID</strong>
          <strong>Destinatário</strong>
          <strong>Entregador</strong>
          <strong>Cidade</strong>
          <strong>Estado</strong>
          <strong>Status</strong>
          <strong>Ações</strong>
        </header>
        <ul>
          <li>
            <small>#01</small>
            <small>Italo Marcos</small>
            <small>
              <span>JD</span>
              John Doe
            </small>
            <small>Ponte Alta</small>
            <small>DF</small>
            <Status>
              <span /> Entregue
            </Status>
            <button type="button">
              <FaOptinMonster size={20} color="#c6c6c6" />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
