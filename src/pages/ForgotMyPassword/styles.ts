import styled from 'styled-components';
import { shade } from 'polished';
import background from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;

  form {
    display: flex;
    flex-direction: column;

    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    button {
      background: #ff9000;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 16px;
      width: 100%;
      margin-top: 8px;
      transition: background 0.2s;

      &:hover {
        background: ${shade(0.1, '#ff9000')};
      }
    }

    a {
      color: #fff;
      margin-top: 10px;
      text-decoration: none;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.5;
      }
    }
  }
`;

export const Background = styled.div`
  background: url(${background}) no-repeat center;
  flex: 1;
  background-size: cover;
`;
