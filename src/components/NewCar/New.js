import React from 'react';
import PropTypes from 'prop-types';
import { Style } from './styles';
import Input from '../Input';

const Modal = ({ children, onClose }) => {
  return (
    <Style>
      <div className="container">
        <div style={{ postion: ' relative' }}>
          <button className="close" type="button" onClick={onClose}>
            x
          </button>
        </div>

        <div className="content">{children}</div>
      </div>
      <Input view={onClose} />
    </Style>
  );
};
export default Modal;

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.bool.isRequired,
};
