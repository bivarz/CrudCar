import React, { useState, useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import axios from 'axios';
import Input from './Input';
import MsgDone from './MsgDone';

import { Container } from './styles';

function FormIn() {
  const [submit, setSubmit] = useState(true);
  const formRef = useRef(null);

  /* Função para modificar o state e retornar a msg de conclusão */
  const handleClose = () => {
    setSubmit(true);
  };

  /* Post dos dados do input */
  const apiPost = (data) => {
    axios
      .post('https://corebiz-test.herokuapp.com/api/v1/newsletter', {
        email: data.email,
        name: data.nome,
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
        nome: Yup.string().required('Preencha com seu nome completo'),
        email: Yup.string()
          .email('Preencha com um e-mail válido')
          .required('Preencha com um e-mail válido'),
      });
      await schema.validate(data, { abortEarly: false });
      apiPost(data);
      formRef.current.setErrors({});

      setTimeout(() => {
        setSubmit(!submit);
      }, 0);
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
            <p>Participe de nossas news com promoções e novidades!</p>
          </div>

          <div className="form">
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input name="nome" placeholder="Digite seu Nome" />
              <Input name="email" placeholder="Digite seu Email" />
              <button type="submit">Eu quero!</button>
            </Form>
          </div>
        </div>
      </Container>
    );
  }

  return submit ? submitTrue() : <MsgDone close={handleClose} />;
}

export default FormIn;
