import styled from 'styled-components';
import { Input } from '@rocketseat/unform';

export const TextInput = styled(Input)`
  display: flex;
  border: 1px solid #ddd;
  border-radius: 4px;
  flex: 1;
  color: #999;
  padding: 12px 10px 12px 15px;
  text-align: left; /** sera q nao eh no placeholder? se pa cair pra todos */

  &::placeholder {
    color: #999999;
    text-align: left;
  }

  svg {
    color: #ddd;
  }
`;
