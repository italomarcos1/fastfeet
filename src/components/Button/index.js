import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button.attrs({
  type: 'submit',
})`
  background: #ccc;
  border-radius: 4px;
  border: none;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  font-weight: bold;
  margin-left: 20px;

  width: 112px;
  height: 36px;
  text-align: center;

  &.save {
    background-color: #7d40e7;
    &:hover {
      background-color: ${darken(0.12, '#7d40e7')};
    }
  }

  &:hover {
    background-color: ${darken(0.1, '#ccc')};
  }

  svg {
    color: currentColor;
    width: 7px;
    height: 12px;
  }
`;
