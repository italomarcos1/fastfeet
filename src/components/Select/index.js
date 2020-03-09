import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@rocketseat/unform'; // instale e troque pra '@unform/core' caso dê errado
import { TSelect } from './styles';

export default function AsyncSelect({ name, data, ...rest }) {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  // const data = [{ label: 'italo' }, { label: 'anakin' }, { label: 'cleiton' }]; // puxar da api

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'select.state.value',
      getValue(ref) {
        if (rest.isMulti) {
          if (!ref.select.state.value) {
            return [];
          }

          return ref.select.state.value.map(option => option.label);
        }
        if (!ref.select.state.value) {
          return '';
        }

        return ref.select.state.value.label;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <TSelect
      cacheOptions
      defaultOptions={data} // valores puxados da api
      defaultValue={defaultValue}
      ref={selectRef}
      classNamePrefix="react-select"
      {...rest}
    />
  );
}

AsyncSelect.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};
