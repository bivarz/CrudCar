import React from 'react';
import { BsPencilSquare } from 'react-icons/bs';

import { Container } from './styles';
import Banner from '../../components/Banner';

export default function index() {
  return (
    <Container>
      <div className="container_banner">
        <Banner />
      </div>
      <div className="list">
        <div className="header_list">
          <div style={{ marginLeft: 10, marginRight: -30 }}>
            <input type="checkbox" />
          </div>
          <div>
            <p>ID</p>
          </div>
          <div>
            <p>Title</p>
          </div>
          <div>
            <p>Brand</p>
          </div>
          <div>
            <p>Age</p>
          </div>
          <div>
            <p>Price</p>
          </div>
          <span className="header_button" />
        </div>
        <div className="list_total">
          <div className="list_cars">
            <div style={{ marginLeft: 10, marginRight: -30 }}>
              <input type="checkbox" />
            </div>
            <span className="id_cars">
              <p>5da87d97a9497b001d834aa7</p>
            </span>
            <div className="title">
              <p>Gol</p>
            </div>
            <div className="brand">
              <p>Volkswagen</p>
            </div>
            <div className="age">
              <p>2008</p>
            </div>
            <div className="price">
              <p>R$23.000,00</p>
            </div>
            <span className="edit">
              <button type="button">
                <BsPencilSquare size={15} />
              </button>
            </span>
          </div>
        </div>
      </div>

      <div className="container_form" />
    </Container>
  );
}
