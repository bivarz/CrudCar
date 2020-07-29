/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';
import { Content } from './styles';

/**
 * O Unform para pega os dados dos Inputs com foco em pervenir re-renders de
  inputs desnecessariamente.
  É necessário criar inputs como componentes,fazer referencia(useRef) ao input
 */

export default function Input({ name, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  function inputNerror() {
    return <input ref={inputRef} defaultValue={defaultValue} {...rest} />;
  }

  function inputError() {
    return (
      <>
        <input
          ref={inputRef}
          defaultValue={defaultValue}
          {...rest}
          className="focused"
        />
        <span className="erro_msg">{error}</span>
      </>
    );
  }
  return <Content>{!error ? inputNerror() : inputError()}</Content>;
}
Input.propTypes = {
  name: PropTypes.string.isRequired,
};
