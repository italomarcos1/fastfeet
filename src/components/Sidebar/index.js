import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaEllipsisH } from 'react-icons/fa';

import { Container, Actions } from './styles';

export default function Sidebar({ children }) {
  const [visible, setVisible] = useState(false);

  function handleVisible() {
    setVisible(!visible);
  }

  return (
    <button type="button" onClick={handleVisible}>
      <FaEllipsisH size={30} color="#c6c6c6" />
      <Container visible={visible}>
        <Actions>{children}</Actions>
      </Container>
    </button>
  );
}

Sidebar.propTypes = {
  children: PropTypes.element.isRequired,
};
