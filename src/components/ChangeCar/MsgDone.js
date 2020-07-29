import React from 'react';

import PropTypes from 'prop-types';
import { FiCheckCircle } from 'react-icons/fi';
import { Container, ContentMsg } from './styles';

function MsgDone() {
  return (
    <Container>
      <ContentMsg>
        <div className="content_msg">
          <div>
            <FiCheckCircle size={100} />
          </div>
          <div className="content_msg_done">
            <span>The Car was successfully edited!</span>
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
