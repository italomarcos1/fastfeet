import React, { useEffect, useState } from 'react';
import { TextInput as Input } from '~/components/Input';
import { Button } from '~/components/Button';
import Sidebar from '~/components/Sidebar';

import api from '~/services/api';

export default function Recipients() {
  const [recipients, setRecipients] = useState([]);

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get('recipients');

      setRecipients(response.data);
    }

    loadRecipients();
  }, []); //eslint-disable-line

  return (
    <>
      <header>
        <h1>Gerenciando destinatários</h1>
        <div>
          <aside>
            <Input
              name="search"
              type="text"
              placeholder="Buscar por destinatários"
            />
            <Button className="save">Cadastrar</Button>
          </aside>
        </div>
      </header>
      <div>
        <header>
          <strong>ID</strong>
          <strong>Nome</strong>
          <strong>Endereço</strong>
          <strong>Ações</strong>
        </header>
        <ul>
          {recipients.map(recipient => (
            <li key={recipient.id}>
              <small>{`#${recipient.id}`}</small>
              <small>{recipient.name}</small>
              <small>{`Rua ${recipient.street}, ${recipient.number}, ${recipient.city} - ${recipient.state}`}</small>

              <Sidebar route="recipients" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
