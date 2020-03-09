import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Sidebar from '~/components/Sidebar';

import api from '~/services/api';

export default function DeliverymenSidebar({ id }) {
  async function handleDelete() {
    const response = await api.delete(`/deliverymen/${id}`);

    console.tron.log(response.data);
  }

  return (
    <Sidebar>
      <Link to="/deliverymen/edit">Editar</Link>
      <button type="button" onClick={handleDelete}>
        Excluir
      </button>
    </Sidebar>
  );
}

DeliverymenSidebar.propTypes = {
  id: PropTypes.number.isRequired,
};
