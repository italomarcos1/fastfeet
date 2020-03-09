import styled from 'styled-components';
import Select from 'react-select/async';

export const TSelect = styled(Select)`
  div.react-select {
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 600px;
    color: #999;
    padding: 12px 10px 12px 15px;
    text-align: left; /** sera q nao eh no placeholder? se pa cair pra todos */

    &::placeholder {
      color: #999999;
      text-align: left;
    }
  }
`;
