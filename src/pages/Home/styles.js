import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  justify-content: center;
  width: 100%;
  min-width: 320px;

  .container_banner {
    position: relative;
  }
  .container_banner {
    bottom: 0px;
  }
  .list {
    position: relative;
    background: #fcfcfc;
    max-width: 1248px;
    margin: 40px auto 0px auto;
    height: calc(100vh - 170px);
    min-height: 300px;
    display: flex;
  }
  .header_list {
    position: absolute;
    left: 0px;
    top: -40px;
    background: #f3f3f3;
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 2px solid #f1f1f1;

    .header_button {
      display: flex;
      width: 50px;
      justify-content: space-between;
      border-radius: 5px;
    }

    div {
      width: 100%;
      max-width: 70px;
      align-items: center;
      display: flex;
      list-style: none;
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
      line-height: 18px;
      color: #383a59;

      p {
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
  .list_total {
    position: relative;
    width: 100%;
  }
  .list_cars {
    display: flex;
    margin: 0px;
    background: #fcfcfc;
    width: 100%;
    height: 40px;
    display: flex;
    border-bottom: 1px solid #f1f1f1;
    align-items: center;
    justify-content: space-between;

    .edit {
      svg {
        margin-left: 5px;
        margin-right: 5px;
        margin-top: 5px;
        size: 10px;
      }
    }
    @media only screen and (max-width: 335px) {
      height: 50px;

      .edit {
        svg {
          margin-right: 5px;
          margin-top: 5px;
          size: 10px;
        }
      }
    }

    @media only screen and (max-width: 460px) {
      display: flex;
      margin: 0px;
      background: #fcfcfc;
      width: 100%;
      display: flex;
      border-bottom: 1px solid #f1f1f1;
      align-items: center;
      justify-content: space-between;

      .title {
        p {
          position: relative;
          font-style: normal;
          font-weight: 400;
          font-size: 11.5px;
          line-height: 18px;
          color: #383a59;
          margin-left: auto;
          margin-right: auto;

          @media only screen and (max-width: 323px) {
            margin-left: 5px;
            margin-right: 5px;
          }
        }
      }
      .brand {
        p {
          position: relative;
          font-style: normal;
          font-weight: 400;
          font-size: 11.5px;
          line-height: 18px;
          color: #383a59;
          margin-left: auto;
          margin-right: auto;

          @media only screen and (max-width: 323px) {
            margin-left: 0px;
            margin-right: 10px;
          }
        }
      }
      .age {
        p {
          position: relative;
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 18px;
          color: #383a59;
          margin-left: auto;
          margin-right: auto;

          @media only screen and (max-width: 323px) {
            margin-left: 0px;
            margin-right: 5px;
          }
        }
      }
      .price {
        p {
          position: relative;
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 18px;
          color: #383a59;
          margin-left: auto;
          margin-right: auto;

          @media only screen and (max-width: 323px) {
            margin-right: 5px;
          }
        }
      }
    }

    :hover {
      background: #a7aace;

      .id_cars {
        p {
          color: #fff;
        }
      }

      p,
      svg {
        color: #fff;
      }
    }
    .id_cars {
      position: relative;
      width: 100%;
      height: 100%;
      max-width: 91px;
      word-wrap: break-word;
      text-overflow: ellipsis;

      p {
        font-style: normal;
        font-weight: 700;
        font-size: 12.5px;
        line-height: 18px;
        color: #383a59;
        word-wrap: break-word;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      @media only screen and (max-width: 460px) {
        position: relative;
        width: 100%;
        height: 100%;
        max-width: 70px;
        word-wrap: break-word;
        text-overflow: ellipsis;

        p {
          font-style: normal;
          font-size: 9px;
          color: #383a59;
          word-wrap: break-word;
          text-overflow: ellipsis;

          @media only screen and (max-width: 335px) {
            max-width: 40px;
            font-size: 8px;
            margin-left: 7px;
          }
        }
      }
    }

    div {
      text-align: center;
      width: 100%;
      height: 100%;
      max-width: 100px;
      display: flex;
      align-items: center;
    }

    p {
      position: relative;
      font-style: normal;
      font-weight: 700;
      font-size: 13px;
      line-height: 18px;
      color: #383a59;
      margin-left: auto;
      margin-right: auto;
    }

    span {
      width: 60px;
      max-width: 60px;
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
      line-height: 18px;
      color: #383a59;

      button {
        border: none;
        background: none;
      }

      svg {
        margin-left: auto;
        color: #383a59;
      }
    }
  }
`;
