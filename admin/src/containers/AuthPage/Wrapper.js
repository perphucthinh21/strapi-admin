import styled from 'styled-components';
import Background from '../../assets/images/background_empty.svg';

const Wrapper = styled.div`
  font-family: 'Montserrat', sans-serif!important;
  display: flex;
  justify-content: space-around;
  text-align: center;
  padding: 6.2rem 0;
  background: #fafafb;
  height: 100vh;
  -webkit-font-smoothing: antialiased;
  background-image: linear-gradient(to right, #6d76df, #7450a9);

  label button div {
    font-family: 'Montserrat', sans-serif;
  }

  .welcome-back {
    color: #999da0;
    font-size: 24px;
  }
  .wrapper {
    height: 22.1rem;
    width: 685px;
    text-align: center;
    background-position-x: center;
    font-size: 1.4rem;
  }
  .errorsContainer {
    margin-top: -21px;
    margin-bottom: 18px;
    color: #ff203c;
  }
  .headerContainer {
    padding: 40px 0 10px 0;
    > span {
      line-height: 36px;
      font-size: 24px;
      font-weight: 600;
    }
    > img {
      margin-top: 1px;
      height: 50px;
    }
  }
  .headerDescription {
    width: 41.6rem;
    text-align: center;
    margin: auto;
    padding: ${({ authType }) =>
      authType === 'register' ? '13px 30px 17px 30px' : '8px 30px 0 30px'};

    line-height: 18px;
    color: #333740;
  }

  .formContainer {
    min-height: 20rem;
    width: 100%;
    max-width: 600px;
    margin: 1.4rem auto;
    margin-bottom: 0;
    padding: 0;
    border-radius: 2px;
    background-color: #ffffff;
    box-shadow: 0 2px 4px 0 #e3e9f3;
  }

  .register-new {
    border-top: 1px solid lightgray;
    padding: 20px;
    font-size: 18px;
  }

  .loginButton {
    margin-top: -6px;
    padding-right: 0;
    text-align: right;
    background-color: #f6f6f6
    height: 80px;
    font-size: 18px;

    > button {
      background: #4a68d7;
      border: none;
      color: white;
      padding: 15px;
      font-size: 14px;
      font-weight: 500;
      border-radius: 5px 5px 5px 5px;
      margin: 20px;
      height: 45px;
      line-height: 20px;
      text-align: center;
    }
  }

  .buttonContainer {
    padding-top: 1rem;
  }

  .linkContainer {
    padding-top: 1.8rem;
    > a {
      color: #262931;
      font-size: 13px;
      &:hover,
      &:active,
      &:focus {
        text-decoration: none;
        outline: 0;
      }
    }
  }

  .bordered {
    border-top: 2px solid
      ${({ withSucessBorder }) => (withSucessBorder ? '#5a9e06' : '#1c5de7')};
  }

  .borderedSuccess {
    border-top: 2px solid #5a9e06;
  }

  .logoContainer {
    position: absolute;
    left: 30px;
    bottom: 30px;

    > img {
      height: 34px;
    }
  }

  .buttonForgotSuccess {
    border: 1px solid #5a9e06;
    color: #5a9e06;
  }

  .forgotSuccess {
    width: 100%;
    text-align: center;
    color: #5a9e06;
    font-size: 13px;
    font-weight: 500;
    > p {
      margin-top: 17px;
      margin-bottom: 18px;
      color: #333740;
    }
  }
`;

export default Wrapper;
