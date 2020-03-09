import React, { useEffect, useState } from 'react';

import { TextInput as Input } from '~/components/Input';
import { Button } from '~/components/Button';

import { Status } from '~/pages/_layouts/Managing/styles';

import api from '~/services/api';
import history from '~/services/history';

import Sidebar from './Sidebar';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get('orders');

      setOrders(response.data);
    }

    loadOrders();
  }, []); //eslint-disable-line

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
            <Button
              className="save"
              onClick={() => history.push('/orders/register')}
            >
              Cadastrar
            </Button>
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
          {orders.map(order => (
            <li key={order.id}>
              <small>{`#${order.id}`}</small>
              <small>{order.recipient.name}</small>
              <small>
                <span>JD</span>
                {order.deliveryman.name}
              </small>
              <small>{order.recipient.city}</small>
              <small>{order.recipient.state}</small>
              <Status>
                <span /> {order.delivered}
              </Status>

              <Sidebar id={order.id} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
