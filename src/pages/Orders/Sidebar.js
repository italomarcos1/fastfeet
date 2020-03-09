import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Sidebar from '~/components/Sidebar';

import api from '~/services/api';

export default function OrdersSidebar({ id }) {
  async function handleDelete() {
    const response = await api.delete(`/orders/${id}`);

    console.tron.log(response.data);
  }

  return (
    <Sidebar>
      <Link to="/orders/details">Visualizar</Link>
      <Link to="/orders/edit">Editar</Link>
      <button type="button" onClick={handleDelete}>
        Excluir
      </button>
    </Sidebar>
  );
}

OrdersSidebar.propTypes = {
  id: PropTypes.number.isRequired,
};
