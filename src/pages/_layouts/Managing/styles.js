import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 900px;
  height: 300px;
  background-color: none;
  margin: 27px auto;

  h1 {
    color: #f0f;
    font-size: 24px;
    font-weight: bold;
    text-align: left;
    display: flex;
    flex: 1;
  }

  header {
    flex: 1;
    height: 112px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    background-color: none;
    text-align: center;

    div {
      display: flex;

      input {
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
      }

      aside {
        display: flex;

        button {
          background: #cccccc;
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
        }
      }
    }
  }
`;
