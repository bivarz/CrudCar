import React from 'react';

import { FaPlusCircle } from 'react-icons/fa';
import { Container, Content } from './styles';

export default function index() {
  return (
    <Container>
      <Content>
        <div className="qty">
          <p>In Total: 50</p>
        </div>
        <div className="button_add">
          <span>
            <FaPlusCircle />
            <p>New Car</p>
          </span>
        </div>
      </Content>
    </Container>
  );
}
