import styled from 'styled-components';

export const Container = styled.div`
  width: 900px;
  height: 300px; /** discutivel */
  background-color: none;
  margin: 27px auto;

  header {
    flex: 1;
    height: 112px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    background-color: none;

    h1 {
      color: #333;
      font-size: 24px;
      font-weight: bold;
      text-align: left;
    }

    aside {
      display: flex;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    padding: 26px 30px 37px;
    background-color: #fff;

    img {
      align-self: center;
      border: 3px solid #eee;

      border-radius: 50%;
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      span {
        display: flex;
        flex: 1;
        flex-direction: column;
        margin-bottom: 9px;

        strong {
          color: #444444;
          font-size: 14px;
          font-weight: bold;
          text-align: left; /** heh */
          margin-bottom: 9px;
        }
      }
    }
  }
`;
