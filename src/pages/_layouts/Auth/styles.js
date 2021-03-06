import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #7d40e7;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 10px #00000033;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 425px;
  width: 360px;
  padding: 0px 30px;
  margin: 0 auto;

  opacity: 1;

  h1 {
    padding: 0;
    margin: 0;
    font-size: 14px;
    color: #444444;
    text-transform: uppercase;
  }

  img {
    /* fit this image later */
    height: 60px;
    width: 250px;
  }

  form {
    input {
      border: 1px solid #777;
      border-radius: 4px;
      padding: 10px;
      margin: 10px auto;
      width: 100%;

      &::placeholder {
        color: 'gray';
      }
    }
    button {
      background-color: #7d40e7;
      border: none;
      border-radius: 4px;
      color: #fff;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 16px;
      font-weight: bold;

      height: 40px;
      width: 100%;
    }
  }
`;
