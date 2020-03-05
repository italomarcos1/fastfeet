import React from 'react';
import { Form, Input } from '@rocketseat/unform';

export default function Orders() {
  return (
    <header>
      <h1>Gerenciando encomendas</h1>
      <div>
        <aside>
          <Input
            name="search"
            type="text"
            placeholder="Buscar por encomendas"
          />
          <button type="button" className="save">
            Cadastrar
          </button>
        </aside>
      </div>
    </header>
  );
}
