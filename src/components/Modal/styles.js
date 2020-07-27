import styled from 'styled-components';

export const Style = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    position: relative;
    max-width: 380px;
    width: 100%;
    height: 400px;
    background: #f3f3f3;
    border-radius: 5px;

    @media only screen and (max-width: 381px) {
      width: 310px;
    }

    .close {
      position: absolute;
      width: 30px;
      height: 30px;
      background: red;
      border: none;
      color: #fff;
      border-radius: 5px;
      margin-top: 5px;
      left: 345px;
      font: bolder;
      border: 1px #fcfcfc gray;

      @media only screen and (max-width: 381px) {
        left: 275px;
      }
    }
    .content {
    }
  }
`;
