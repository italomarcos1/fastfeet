import React from 'react';
import PropTypes from 'prop-types';

import { Container, Content } from './styles';

export default function Details({ children }) {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
}

Details.propTypes = {
  children: PropTypes.element.isRequired,
};
