import styled from 'styled-components';

export const Container = styled.div`
  position: abolute;
  display: flex;
  width: 100%;
  height: 100%;
  max-height: 430px;
  justify-content: center;
  background: #000;

  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1350px;
  max-height: 430px;
  overflow: hidden;
  background: black;

  .banner {
    position: relative;
  }

  .banner_text {
    left: 110px;
    top: 150px;
    max-width: 480px;
    position: absolute;
    color: #fff;
    z-index: 5;

    @media only screen and (max-width: 323px) {
      min-width: 320px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      min-height: 191.2px;
      position: absolute;
      left: 0;
      top: 0;
      background: rgba(0, 0, 0, 0.55);
      background-blend-mode: multiply;

      span {
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 41px;
      }
      p {
        margin-top: 5px;
        margin-left: 10px;
        font-style: normal;
        font-weight: 900;
        font-size: 37px;
        line-height: 41px;
      }
    }
  }

  span {
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 41px;
  }
  p {
    margin-top: 10px;
    font-style: normal;
    font-weight: 900;
    font-size: 47px;
    line-height: 41px;
  }

  .banner_circles {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100%;
  }
  .banner_li {
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 70px;
    height: 100%;

    span {
      margin-top: 390px;
      margin-bottom: auto;
      position: relative;
      width: 10px;
      max-width: 10px;
      height: 10px;
      color: #fff;
      background: black;
      clip-path: circle(50% at 50% 50%);
      background: #bdbdbd;
      z-index: 99;
    }
  }

  .banner_black {
    float: left;
    max-height: 430px;
    right: 50%;
    position: absolute;
    display: flex;
    align-items: right;
    justify-content: left;
    z-index: 0;
    height: 430px;
    max-height: 430px;

    @media only screen and (max-width: 323px) {
      visibility: hidden;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  .banner_black_overflow {
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 675px;
    max-height: 430px;
  }

  .banner_image {
    float: right;
    max-height: 431px;
    height: 100%;
    @media only screen and (max-width: 323px) {
      height: 191.2px;
    }
  }

  img {
    width: 100%;
    max-width: 1010px;
    max-height: 430px;
    height: 100%;
  }
`;
