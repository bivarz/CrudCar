/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';

import { BsPencilSquare } from 'react-icons/bs';
import api from '../../services/api';
import { formatPrice } from '../../utils/format';
import Modal from '../../components/Modal/Modal';

import { Container } from './styles';
import Banner from '../../components/Banner';

function Home() {
  const [cars, setCars] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [idC, setId] = useState({});

  async function getData() {
    const response = await api.get('cars');
    const data = response.data.map((car) => ({
      ...car,
      priceFormatted: formatPrice(car.price),
    }));
    setCars(data);
  }

  useEffect(() => {
    getData();
  }, []);

  function handleModalClose() {
    setModalVisible(false);
    getData();
  }

  window.addEventListener('scroll', () => {
    setModalVisible(false);
  });

  function modal(id) {
    setId(id);
    setModalVisible(true);
  }

  return (
    <>
      {isModalVisible ? <Modal id={idC} onClose={handleModalClose} /> : null}
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
            <ul>
              {cars.map((car) => (
                <li key={car._id}>
                  <div className="list_cars">
                    <div style={{ marginLeft: 10, marginRight: -30 }}>
                      <input type="checkbox" />
                    </div>
                    <span className="id_cars">
                      <p>{car._id}</p>
                    </span>
                    <div className="title">
                      <p>{car.title}</p>
                    </div>
                    <div className="brand">
                      <p>{car.brand}</p>
                    </div>
                    <div className="age">
                      <p>{car.age}</p>
                    </div>
                    <div className="price">
                      <p>{car.priceFormatted}</p>
                    </div>
                    <span className="edit">
                      <button type="button" onClick={() => modal(car._id)}>
                        <BsPencilSquare size={15} />
                      </button>
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="container_form" />
      </Container>
    </>
  );
}

export default Home;
