import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEllipsisH } from 'react-icons/fa';

import { Container, Actions } from './styles';

export default function Sidebar() {
  const [visible, setVisible] = useState(false);

  function handleVisible() {
    setVisible(!visible);
  }

  return (
    <button type="button" onClick={handleVisible}>
      <FaEllipsisH size={30} color="#c6c6c6" />
      <Container visible={visible}>
        <Actions>
          <Link to="/:action/details">Visualizar</Link>
          <Link to="/:action/edit">Editar</Link>
          <Link to="/:action/delete">Excluir</Link>
        </Actions>
      </Container>
    </button>
  );
}
