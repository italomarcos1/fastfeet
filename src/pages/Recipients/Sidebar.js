import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Sidebar from '~/components/Sidebar';

import api from '~/services/api';

export default function RecipientsSidebar({ id }) {
  async function handleDelete() {
    const response = await api.delete(`/recipients/${id}`);

    console.tron.log(response.data);
  }

  return (
    <Sidebar>
      <Link to="/orders/edit">Editar</Link>
      <button type="button" onClick={handleDelete}>
        Excluir
      </button>
    </Sidebar>
  );
}

RecipientsSidebar.propTypes = {
  id: PropTypes.number.isRequired,
};
