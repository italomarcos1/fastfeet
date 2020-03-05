import React from 'react';
import PropTypes from 'prop-types';

import { Container, Content } from './styles';

export default function List({ children }) {
  return (
    <Container>
      <Content>me mama</Content>
    </Container>
  );
}

List.propTypes = {
  children: PropTypes.element.isRequired,
};
