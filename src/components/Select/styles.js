import styled from 'styled-components';
import Select from 'react-select/async';

export const TSelect = styled(Select)`
  display: flex;
  justify-content: center;
  padding: 6px 5px 6px 7.5px;

  > div {
    border: 1px solid #ddd;
    border-radius: 4px;
    text-align: center;
    justify-content: center;
    color: #999;
    height: 45px;
    width: 405px;

    &::placeholder {
      color: #999999;
    }

    &:focus {
      color: #7d40e7;
    }
  }
`;
