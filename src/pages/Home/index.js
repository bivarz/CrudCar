import React from 'react';

import { Container } from './styles';
import Banner from '../../components/Banner';

export default function index() {
  return (
    <Container>
      <div className="container_banner">
        <Banner />
      </div>

      <div className="container_form" />
    </Container>
  );
}
