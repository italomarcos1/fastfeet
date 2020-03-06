import React, { useState, useEffect } from 'react';
import { FaEllipsisH } from 'react-icons/fa';

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
              <small>{`#${problem.id}`}</small>
              <small>{problem.description}</small>

              <button type="button">
                <FaEllipsisH size={30} color="#c6c6c6" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
