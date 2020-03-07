import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaEllipsisH } from 'react-icons/fa';

import { Container, Actions } from './styles';

export default function Sidebar({ route }) {
  const [visible, setVisible] = useState(false);

  function handleVisible() {
    setVisible(!visible);
  }

  return (
    <button type="button" onClick={handleVisible}>
      <FaEllipsisH size={30} color="#c6c6c6" />
      <Container visible={visible}>
        <Actions>
          <Link to={`/${route}/details`}>Visualizar</Link>
          <Link to={`/${route}/edit`}>Editar</Link>
          <Link to={`/${route}/delete`}>Excluir</Link>
        </Actions>
      </Container>
    </button>
  );
}

Sidebar.propTypes = {
  route: PropTypes.string.isRequired,
};
