import React, { useState, useRef } from 'react';
import { Form } from '@unform/web';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import axios from 'axios';
import Input from './Input';
import MsgDone from './MsgDone';

import { Container } from './styles';

function FormIn({ view }) {
  const [submit, setSubmit] = useState(true);
  const formRef = useRef(null);

  /* Função para modificar o state e retornar a msg de conclusão */
  const handleClose = () => {
    setSubmit(true);
  };

  /* Post dos dados do input */
  const apiPost = (data) => {
    axios
      .post('http://157.230.213.199:3000/api/cars', {
        title: data.title,
        brand: data.brand,
        price: data.price,
        age: data.age,
      })
      // eslint-disable-next-line no-console
      .then((response) => console.log(response.data))
      // eslint-disable-next-line no-console
      .catch((response) => console.log(response.status));
  };

  /* Função para pegar os dados do input , o yup faz a validação dos campos
   e se a tentativa der erro ela retorna as menssagens */
  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        title: Yup.string().required('Title is Required!'),
        brand: Yup.string().required('Brand is Required!'),
        price: Yup.number().required('Price is Required!'),
        age: Yup.number().required('Age is Required!'),
      });
      await schema.validate(data, { abortEarly: false });
      apiPost(data);
      formRef.current.setErrors({});

      setSubmit(!submit);

      reset();
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
          <div className="container_content_title">
            <p>Add New Car</p>
          </div>

          <div className="form">
            <Form ref={formRef} onSubmit={handleSubmit}>
              <div>
                <p>Title</p>
                <Input name="title" placeholder="Enter Title - Ex. Amarok" />
              </div>
              <p>Brand</p>
              <Input name="brand" placeholder="Enter Brand - Ex. Ford" />
              <p>Price</p>
              <Input name="price" placeholder="Enter Price - Ex. 15000" />
              <p>Age</p>
              <Input name="age" placeholder="Enter Age - Ex:.2000" />
              <div className="buttons">
                <button type="button" className="button_cancel" onClick={view}>
                  Cancel
                </button>
                <button type="submit">Register</button>
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
};
