/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { MdDeleteForever } from 'react-icons/md';
import api from '../../services/api';
import Input from '../ChangeCar';
import { Style } from './styles';

const Modal = ({ onClose, car }) => {
  const apiDelete = () => {
    api
      .delete(`cars/${car.id}`)
      .then(onClose)
      .catch((response) => console.log(response.status));
  };

  return (
    <Style>
      <div className="container">
        <div style={{ postion: ' relative' }}>
          <button className="close" type="button" onClick={onClose}>
            x
          </button>
        </div>
        <div className="title">
          <p>
            Edit the Car:{car.title}/{car.age}
          </p>
          <button type="button" onClick={apiDelete}>
            <p>Delete this Car</p>
            <MdDeleteForever size={15} />
          </button>
        </div>

        <Input id={car.id} view={onClose} carValue={car} />
      </div>
    </Style>
  );
};
export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
