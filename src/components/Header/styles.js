import styled from 'styled-components';

export const Container = styled.div`
  background: #282a36;
`;
export const Content = styled.div`
  background: #282a36;
  max-width: 1248px;
  margin: 0 auto;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    margin-left: 10px;
    margin-top: 10px;
    height: 200px;

    @media only screen and (max-width: 323px) {
      margin-left: 10px;
      visibility: visible;
      margin-left: 10px;
      height: 150px;
    }
  }

  .logo {
    @media only screen and (max-width: 323px) {
      position: absolute;
      left: 45px;
      top: -27px;
    }
  }

  .menu_hamburger {
    visibility: hidden;

    @media only screen and (max-width: 323px) {
      position: absolute;
      top: 15px;
      left: 20px;
      visibility: visible;

      svg {
        color: #ffff;
      }
    }
  }
`;
export const Input = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 323px) {
    position: absolute;
    top: 15px;
    left: -10px;
    z-index: 0;

    input {
      width: 100%;
      border: 0px;
      color: #7a7a7a;
      font-family: Nunito;
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 18px;
      margin-left: 20px;
      padding: 3px 0px;
      border-bottom: 1px solid #7a7a7a;
      background: #f9f9f9;
      border-radius: 10px;
    }
  }

  input {
    max-width: 718px;
    width: 100%;
    border: 0px;
    color: #7a7a7a;
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
    margin-left: 20px;
    padding: 5px 5px;
    border-bottom: 1px solid #7a7a7a;
    background: #f9f9f9;
    border-radius: 15px;
  }
  img {
    display: flex;
    position: relative;
    left: -21px;
    bottom: 1px;
    z-index: 1;
  }
`;
export const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 200px;
  width: 100%;
  height: 80px;

  @media only screen and (max-width: 323px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .cart {
    display: flex;
    align-items: center;

    @media only screen and (max-width: 323px) {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: space-between;
      left: 255px;
      top: 15px;
    }
  }

  .user {
    @media only screen and (max-width: 323px) {
      position: absolute;
      display: none;
    }
  }

  .profile_items {
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: center;

    button {
      background: none;
      border: none;
    }

    img {
      margin-right: 3px;
    }

    p {
      margin-right: 20px;
      color: #7a7a7a;
    }
    span {
      width: 16px;
      height: 16px;
      padding: 8 8px;
      color: white;
      background: #f8475f;
      text-align: center;
      font-family: Nunito;
      font-style: normal;
      font-weight: bold;
      font-size: 10px;
      line-height: 14px;
      align-items: center;
      border-radius: 10px;
      border: 1px solid white;

      @media only screen and (max-width: 323px) {
        display: none;
      }
    }
  }
`;
