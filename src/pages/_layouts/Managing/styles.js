import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 900px;
  height: 300px;
  background-color: none;
  margin: 27px auto;
  position: relative;
  flex-direction: column;

  h1 {
    color: #444;
    font-size: 24px;
    font-weight: bold;
    text-align: left;
    display: block;
    width: 900px;
  }

  header {
    height: 112px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    background-color: none;
    text-align: center;

    div {
      display: flex;

      aside {
        display: flex;
      }
    }
  }

  ul {
    li {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #fff;
      flex: 1;
      font-size: 16px;
      color: #666;
      height: 57px;
      padding: 20px 25px;
      margin-bottom: 21px;

      img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        margin-right: 5px;
      }

      small {
        span {
          background-color: #f0f;
          padding: 7px 8px;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          margin-right: 5px;
        }
      }

      button {
        background: none;
        border: 0;
      }
    }
  }
`;

export const NotificationList = styled.div`
  div {
    background-color: #f0f;
    left: calc(100% - 110px);
    top: calc(50% + 15px);
    position: absolute;
    width: 150px;
    height: 120px;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0px 0px 2px #00000026;

    button {
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
  }
`;

export const Status = styled.span`
  font-weight: bold;
  font-size: 14px;
  color: #2ca42b;
  background-color: #dff0df;
  width: 99px;
  height: 25px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  /** largura variavel pra caber texto grande e nao espremer conteudo */
  span {
    width: 10px;
    height: 10px;
    background-color: #2ca42b;
    border-radius: 50%;
    margin: 0 3px;
  }
`;
