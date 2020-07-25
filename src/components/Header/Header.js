import React from 'react';
import { useSelector } from 'react-redux';
import { GiHamburgerMenu } from 'react-icons/gi';

import { Container, Content, Input, Profile } from './styles';
import Img from '../../assets/images/logo.png';

export default function Header() {
  const counter = useSelector((state) => state);

  return (
    <Container>
      <Content>
        <nav>
          <span className="menu_hamburger">
            <GiHamburgerMenu />
          </span>
          <img className="logo" src={Img} alt="logo_corebiz" />
        </nav>
        <Input>
          <input type="text" placeholder="O que você está procurando?" />
        </Input>

        <Profile>
          <div className="profile_items">
            <div className="cart">
              <span>{counter}</span>
            </div>
          </div>
        </Profile>
      </Content>
    </Container>
  );
}
