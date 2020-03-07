import React, { useState, useEffect } from 'react';
import { TextInput as Input } from '~/components/Input';
import { Button } from '~/components/Button';
import Sidebar from '~/components/Sidebar';

import api from '~/services/api';

export default function Deliverymen() {
  const [deliverymen, setDeliverymen] = useState([]);

  useEffect(() => {
    async function loadDeliverymen() {
      const response = await api.get('list');

      setDeliverymen(response.data);
    }

    loadDeliverymen();
  }, []);

  return (
    <>
      <header>
        <h1>Gerenciando entregadores</h1>
        <div>
          <aside>
            <Input
              name="search"
              type="text"
              placeholder="Buscar por entregadores"
            />
            <Button className="save">Cadastrar</Button>
          </aside>
        </div>
      </header>
      <div>
        <header>
          <strong>ID</strong>
          <strong>Foto</strong>
          <strong>Nome</strong>
          <strong>Email</strong>
          <strong>Ações</strong>
        </header>
        <ul>
          {deliverymen.map(man => (
            <li key={man.id}>
              <small>{`#${man.id}`}</small>
              <img src={man.avatar.url} alt="" />
              <small>
                <span>JD</span>
                {man.name}
              </small>
              <small>{man.email}</small>

              <Sidebar route="deliverymen" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
