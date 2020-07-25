import React from 'react';

import PropTypes from 'prop-types';
import { Container, ContentMsg } from './styles';

function MsgDone({ close }) {
  return (
    <Container>
      <ContentMsg>
        <div className="content_msg">
          <div className="content_msg_done">
            <span>Seu e-mail foi cadastrado com sucesso!</span>
            <p>
              A partir de agora você receberá as novidade e ofertas exclusivas.
            </p>
          </div>
          <div className="content_button">
            <button type="button" onClick={close}>
              Cadastrar novo e-mail!
            </button>
          </div>
        </div>
      </ContentMsg>
    </Container>
  );
}
MsgDone.propTypes = {
  close: PropTypes.func.isRequired,
};

export default MsgDone;
