import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Sidebar from '~/components/Sidebar';

import api from '~/services/api';

export default function ProblemsSidebar({ id }) {
  async function handleDelete() {
    const response = await api.delete(`problem/${id}/cancel_delivery`);

    console.tron.log(response.data);
  }

  return (
    <Sidebar>
      <Link to="/problems/details">Visualizar</Link>
      <button type="button" onClick={handleDelete}>
        Cancelar encomenda
      </button>
    </Sidebar>
  );
}

ProblemsSidebar.propTypes = {
  id: PropTypes.number.isRequired,
};
