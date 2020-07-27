import styled from 'styled-components';

export const Container = styled.div`
  background: #383a59;
`;

export const Content = styled.div`
  background: #383a59;
  max-width: 1248px;
  width: 100%;
  margin: 0 auto;
  height: 50px;
  display: flex;
  padding: 10px;
  align-items: center;
  display: flex;
  justify-content: space-between;

  .qty {
    margin: 0 30px;
    display: flex;
    align-items: center;

    @media only screen and (max-width: 323px) {
      position: absolute;
      left: -15px;
      top: 3px;
    }

    p {
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 41px;
      color: #ffff;
    }
  }

  .button_add {
    button {
      display: flex;
      align-items: center;
      justify-content: row;
      width: 100px;
      height: 40px;
      border-radius: 5px;
      border: none;
      background: #62d06e;
    }
    button:hover {
      transition: 0.5s;
      background: #50bf5b;
    }

    @media only screen and (max-width: 323px) {
      position: absolute;
      left: 190px;
      top: 5px;
    }

    svg {
      margin-left: auto;
      color: #282a36;
    }
    p {
      margin: 10px 11px 9px 5px;
      font-style: normal;
      font-weight: 700;
      font-size: 13px;
      line-height: 18px;
      color: #282a36;
    }
  }
`;
