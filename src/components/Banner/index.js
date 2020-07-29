import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
import { FaPlusCircle } from 'react-icons/fa';
import { Container, Content } from './styles';
import New from '../NewCar/New';

export default function Banner() {
  const [isModalVisible, setModalVisible] = useState(false);
  // const counter = useSelector((state) => state);

  function handleModal() {
    setModalVisible(true);
  }
  function handleModalClose() {
    setModalVisible(false);
  }
  window.addEventListener('scroll', () => {
    setModalVisible(false);
  });

  return (
    <>
      {isModalVisible ? <New onClose={handleModalClose} /> : null}

      <Container>
        <Content>
          <div className="qty">
            <p>In Total: 23</p>
          </div>
          <div className="button_add">
            <button type="button" onClick={handleModal}>
              <FaPlusCircle />
              <p>New Car</p>
            </button>
          </div>
        </Content>
      </Container>
    </>
  );
}
