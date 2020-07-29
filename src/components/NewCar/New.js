import React from 'react';
import PropTypes from 'prop-types';
import { Style } from './styles';
import Input from '../Input';

const Modal = ({ onClose }) => {
  return (
    <Style>
      <div className="container">
        <div style={{ postion: ' relative' }}>
          <button className="close" type="button" onClick={onClose}>
            x
          </button>
        </div>

        <div className="content">
          <Input view={onClose} />
        </div>
      </div>
    </Style>
  );
};
export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
