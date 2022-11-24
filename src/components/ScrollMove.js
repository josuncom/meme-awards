import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const ScrollMove= () => {
  return (
    <SideBlock>
      <div>
        <Link to="HomeContainer" spy={true} smooth={true}>
          <span>To Home</span>
        </Link>
        <br />
        <Link to="AboutContainer" spy={true} smooth={true}>
          <span>To About</span>
        </Link>
        <br />
        <Link to="ProfileContainer" spy={true} smooth={true}>
          <span>To Profile</span>
        </Link>
      </div>
    </SideBlock>
  );
};

const SideBlock = styled.div`
  width: 10%;
  position: fixed;
  right: 5rem;
  margin-top: 70px;
  div {
    display: flex;
    flex-direction: column;
  }
  span {
    cursor: pointer;
  }
`;

export default ScrollMove;