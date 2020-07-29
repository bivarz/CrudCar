import styled from 'styled-components';

export const Style = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;

  .title {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;

    p {
      font-size: 18px;
      font-weight: 700;
      color: #383a59;
    }

    button {
      display: flex;
      background: none;
      border: none;
      z-index: 60;
      align-items: center;
      p {
        font-size: 10px;
        color: #383a59;
      }

      svg {
        margin-top: 0px;
        color: #383a59;
      }

      :hover {
        p,
        svg {
          color: red;
        }
      }
    }
  }

  .container {
    position: absolute;
    top: 100px;
    max-width: 380px;
    width: 100%;
    height: 400px;
    background: #f3f3f3;
    border-radius: 5px;

    @media only screen and (max-width: 385px) {
      max-width: 310px;
    }

    .close {
      position: absolute;
      width: 30px;
      height: 30px;
      background: red;
      border: none;
      color: #fff;
      border-radius: 50px;
      margin-top: 5px;
      left: 345px;
      font: bolder;
      border: 1px #fcfcfc gray;
      z-index: 51;

      @media only screen and (max-width: 381px) {
        left: 275px;
      }
    }
    .content {
    }
  }
`;
