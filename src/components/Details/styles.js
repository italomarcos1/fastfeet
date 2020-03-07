import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;

  background-color: #000;
  opacity: 0.7;

  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Content = styled.div`
  background-color: #fff;
  width: 450px;
  height: 425px;
  box-shadow: 0px 0px 10px #00000033;
  border-radius: 4px;

  padding: 25px 30px 50px;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    strong {
      font-size: 14px;
      color: #444;
      margin-bottom: 4px;
    }
    span {
      color: #666;
      font-size: 16px;
    }
    border-bottom: 9px;
    margin-bottom: 9px;
    padding-bottom: 1px solid #eee;
  }
`;
