import React from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';
import {
  AiFillMail,
  AiFillCamera,
  AiOutlineSearch,
  AiFillHome,
} from 'react-icons/ai';

import { Container, Content, Input, Profile } from './styles';
import Img from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <span className="menu_hamburger">
            <GiHamburgerMenu />
          </span>
          <div className="logo">
            <img className="logo" src={Img} alt="my_car" />
          </div>
        </nav>
        <Input>
          <input type="text" placeholder="What are you looking for?" />
          <AiOutlineSearch size={18} />
        </Input>

        <Profile>
          <div className="profile_items">
            <AiFillHome size={18} />
            <AiFillMail size={18} />

            <div className="image">
              <img
                src="https://avatars1.githubusercontent.com/u/53359269?s=460&u=55ca830ff0de06136784f41d315a034a21074070&v=4"
                alt="profile_image"
              />
            </div>
            <div className="cart">
              <span>
                <AiFillCamera size={11} />
              </span>
            </div>
          </div>
        </Profile>
      </Content>
    </Container>
  );
}
