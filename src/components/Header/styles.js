import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const Container = styled.div`
  height: 64px;
  padding: 19px 30px;
  background-color: #fff;
  display: flex;
  align-items: center;
  min-width: 1000px;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin: 0 auto;

  nav {
    display: flex;
    align-items: center;

    img {
      height: 24px;
      width: 170px;
      margin-right: 20px;
      padding-right: 30px;
      border-right: 1px solid #ddd;
    }

    div {
      display: flex;
    }
  }

  aside {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      margin-bottom: 10px;
      color: #666;
      font-size: 14px;
      font-weight: bold;
    }

    button {
      border: 0;

      background: none;
      background-color: none;
      color: #de3b3b;

      &:hover {
        color: ${darken(0.1, '#de3b3b')};
      }
    }
  }
`;

export const Label = styled(Link)`
  color: ${({ selected }) => (selected ? '#444' : '#999')};
  border: 0;
  background: none;
  font-weight: bold;
  margin-right: 21px;
  text-transform: uppercase;

  &:hover {
    color: ${({ selected }) => !selected && darken(0.05, '#777')};
  }
`;
