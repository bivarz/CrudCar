/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react';
import { Form } from '@unform/web';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import axios from 'axios';
import Input from './Input';
import MsgDone from './MsgDone';

import { Container } from './styles';

function FormIn({ view, id, carValue }) {
  const [submit, setSubmit] = useState(true);
  const formRef = useRef(null);

  const initialState = {
    title: carValue.title,
    brand: carValue.brand,
    price: carValue.price,
    age: carValue.age,
  };

  /* Função para modificar o state e retornar a msg de conclusão */
  const handleClose = () => {
    setSubmit(true);
  };

  /* Put dos dados do input */
  const apiPut = (data) => {
    axios
      .put(`http://157.230.213.199:3000/api/cars/${id}`, {
        title: data.title,
        brand: data.brand,
        price: data.price,
        age: data.age,
      })
      .then()
      .catch((response) => console.log(response.status));
  };

  /* Função para pegar os dados do input , o yup faz a validação dos campos
e se a tentativa der erro ela retorna as menssagens */
  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        title: Yup.string().required(),
        brand: Yup.string().required(),
        price: Yup.number().required(),
        age: Yup.number().min(4).required(),
      });
      await schema.validate(data, { abortEarly: false });
      apiPut(data);
      formRef.current.setErrors({});

      setSubmit(false);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};
        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });
        formRef.current.setErrors(errorMessages);
      }
    }
  }

  function submitTrue() {
    return (
      <Container>
        <div className="container_content">
          <div className="container_content_title" />
          <div className="form">
            <Form
              initialData={initialState}
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <div>
                <p>New Title</p>
                <Input name="title" placeholder="Enter Title - Ex. Amarok" />
              </div>
              <p>New Brand</p>
              <Input name="brand" placeholder="Enter Brand - Ex. Ford" />
              <p>New Price</p>
              <Input name="price" placeholder="Enter Price - Ex. 15000" />
              <p>New Age</p>
              <Input name="age" placeholder="Enter Age - Ex.2000" />
              <div className="buttons">
                <button type="button" className="button_cancel" onClick={view}>
                  Cancel
                </button>
                <button type="submit">Save Changes</button>
              </div>
            </Form>
          </div>
        </div>
      </Container>
    );
  }

  return submit ? submitTrue() : <MsgDone close={handleClose} />;
}

export default FormIn;

FormIn.propTypes = {
  view: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
