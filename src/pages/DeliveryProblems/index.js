import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';

import api from '~/services/api';

export default function DeliveryProblems() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function loadProblems() {
      const response = await api.get('problems');

      setProblems(response.data);
    }

    loadProblems();
  }, []);

  return (
    <>
      <header>
        <h1>Problemas na entrega</h1>
      </header>
      <div>
        <header>
          <strong>Encomenda</strong>
          <strong>Problema</strong>
          <strong>Ações</strong>
        </header>
        <ul>
          {problems.map(problem => (
            <li key={problem.id}>
              <small>{`#${problem.delivery_id}`}</small>
              <small>{problem.description}</small>

              <Sidebar id={problem.id} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
