import styled from 'styled-components';

export const Container = styled.div`
  width: 900px;
  height: 900px; /** discutivel */
  margin-top: 91px;
  background-color: #f0f;

  div {
    height: 112px;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      color: #444444;
      font-size: 24px;
      font-weight: bold;
      text-align: left;
    }
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;

      svg {
        color: currentColor;
        width: 7px;
        height: 12px;
      }

      width: 112px;
      height: 36px;
      background: #cccccc;
      border-radius: 4px;
      font-size: 14px;
      text-align: center;
      font-weight: bold;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left; /** seria individual de cada tag? */

  strong {
    color: #444444;
    font-size: 14px;
    font-weight: bold;
    text-align: left; /** heh */
    margin-bottom: 9px;
  }

  input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* flex:1; */
    border: 1px solid #ddd;
    border-radius: 4px;
    color: #fff;
    padding: 12px 10px 12px 15px;
    text-align: left; /** sera q nao eh no placeholder? se pa cair pra todos */

    svg {
      color: #ddd;
    }

    &::placeholder {
      color: #999999;
      text-align: left;
    }
  }
`;
