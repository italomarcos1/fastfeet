import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function List({ children }) {
  return <Container>{children}</Container>;
}

List.propTypes = {
  children: PropTypes.element.isRequired,
};
