import React from 'react';
import PropTypes from 'prop-types';
import { Container, Wrapper } from './styles';

export default function Auth({ children }) {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
}

Auth.propTypes = {
  children: PropTypes.element.isRequired,
};
