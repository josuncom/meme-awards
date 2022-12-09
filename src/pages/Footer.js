import { React, useState, useEffect } from "react";
import styled from "styled-components";

import "../css/Footer.css";

export default function Footer() {
  return (
    <FooterContainer>
      <HorizonalLine />
      <EmailBox>✉ info@banggooso.com</EmailBox>
      <BrandBox>Copyright © 2022 SoftSphere.</BrandBox>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  height: 25rem;
`;

const EmailBox = styled.div`
  text-align: left;
  font-size: 2.5rem;
  color: white;
  margin-left: 5%;
  margin-top: 3rem;
  font-family: "SUITM";

  @media screen and (max-width: 500px) {
    font-size: 2rem;
  }
`;

const BrandBox = styled.div`
  margin-top: 2rem;
  text-align: left;
  color: white;
  font-size: 1.75rem;
  margin-left: 5%;
  margin-top: 7rem;
  font-weight: lighter;
  font-family: "SUITM";

  @media screen and (max-width: 500px) {
    font-size: 1.5rem;
  }
`;
const HorizonalLine = styled.hr`
  color: white;
  width: 100%;
`;
