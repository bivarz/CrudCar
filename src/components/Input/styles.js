import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap');

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 30px;
  top: 10px;
  width: 320px;
  height: 400px;

  @media only screen and (max-width: 385px) {
    left: -5px;
  }

  .focused {
    border: 1px solid #d7182a;
  }

  .container_content {
    justify-content: center;
    align-items: center;
  }
  .container_content_title {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 22px;
  }

  form {
    display: block;
    justify-content: space-space-around;
    align-items: center;
    margin-top: 10px;
    width: 100%;

    p {
      font-size: 12px;
      margin-top: 5px;
      margin-bottom: -4px;
      margin-left: 3px;
    }
  }
  .buttons {
    display: flex;
    justify-content: space-between;
  }
  .button_cancel {
    background: #fff;
    border: 1px solid red;
    color: red;

    :hover {
      background: red;
      color: #fff;
    }
  }
  button {
    display: flex;
    width: 135px;
    height: 48px;
    background: #383a59;
    border-radius: 5px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #ffff;
    border: none;
    margin-top: 15px;

    :hover {
      background: #363856;
      color: #fff;
    }
  }
  Input {
    width: 100%;
    width: 280px;
    height: 40px;
    background: #ffffff;
    margin-top: 0px;
    border-radius: 5px;
    padding: 16px;
    border: none;

    ::placeholder {
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 14px;
      color: #f1f1f1;
    }

    :focus {
      border: 1px solid #383a59;
      padding: 16px;
    }
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;

  span {
    display: flex;
    position: relative;
    bottom: 0px;
    color: #d7182a;
    font-style: normal;
    font-weight: normal;
    font-size: 9px;
    line-height: 12px;
    display: none;
  }
`;
export const ContentMsg = styled.div`
  .content_msg {
    width: 100%;
    max-width: 360px;
    display: block;
    justify-content: center;

    svg {
      margin-bottom: 10px;
      margin-left: 110px;
      color: #50bf5b;
    }
  }
  .content_msg_done {
    width: 100%;
    display: block;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-bottom: 10px;

    span {
      align-items: center;
      text-align: center;
      justify-content: center;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 14px;
      color: #383a59;
    }
    p {
      position: relative;
      width: 100%;
      font-style: normal;
      font-weight: normal;
      font-size: 11.5px;
      line-height: 10px;
      display: flex;
      align-items: center;
      text-align: center;
    }
  }
  .content_button {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      display: flex;
      position: relative;
      width: 328px;
      height: 48px;
      background: #383a59;
      border-radius: 5px;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: #ffff;
      border: none;
      margin-left: 0px;
    }
  }
`;
