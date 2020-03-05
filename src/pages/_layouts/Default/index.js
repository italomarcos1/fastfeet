import React from 'react';
import PropTypes from 'prop-types';
import { /* Container, */ Wrapper } from './styles';

import Header from '~/components/Header';

export default function Default({ children }) {
  return (
    <Wrapper>
      <Header>{children}</Header>
    </Wrapper>
  );
}

Default.propTypes = {
  children: PropTypes.element.isRequired,
};
