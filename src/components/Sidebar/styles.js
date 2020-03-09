import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  position: relative;
  z-index: 1;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
`;

export const Actions = styled.div`
  position: absolute;
  background-color: #fff;
  left: calc(100% - 90px);
  top: calc(50% + 15px);
  width: 150px;
  padding: 10px 8px;

  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 0px 2px #00000026;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 7px); /** WHAT IN THE NAME OF FUCK */
    top: -7px;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid #fff;
  }

  a {
    /** mudar pra 'Link', então isso será um A ou um styled(Link) */
    background: none;
    border: 0;
    font-size: 16px;
    color: #999;
    padding: 3px 11px 9px;

    &:hover {
      color: ${darken(0.12, '#999')};
    }

    svg {
      width: 15px;
      height: 10px;
    }
    font-size: 16px;
    color: #999;
  }
  button {
    /** mudar pra 'Link', então isso será um A ou um styled(Link) */
    background: none;
    border: 0;
    font-size: 16px;
    color: #999;

    &:hover {
      color: ${darken(0.12, '#999')};
    }

    svg {
      width: 15px;
      height: 10px;
    }
    font-size: 16px;
    color: #999;
  }
`;
