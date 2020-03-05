import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Managing({ children }) {
  return <Container>{children}</Container>;
}

Managing.propTypes = {
  children: PropTypes.element.isRequired,
};
