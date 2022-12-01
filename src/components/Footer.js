import React from "react";
import styled from "styled-components";
import "../pages/css/Footer.css";

import Share from "../image/share.png";
import Kakao from "../image/kakao.png";
import Insta from "../image/insta.png";
import Twitter from "../image/twitter.png";

function Footer() {
  return (
    <FooterContainer>
      <HorizonalLine />
      <EmailBox>✉ info@banggooso.com</EmailBox>
      <BrandBox>Copyright © 2022 SoftSphere.</BrandBox>
      <div className="adminActions">
        <input type="checkbox" name="adminToggle" className="adminToggle" />
        <a className="share-button" href="#!">
          <ShareImage src={Share} />
        </a>
        <div className="adminButtons">
          <a href="#" title="Edit User">
            URL
          </a>
          <a href="#" title="Add User">
            <ShareImage src={Insta} />
          </a>
          <a href="#" title="Edit Company">
            <ShareImage src={Twitter} />
          </a>
          <a href="#" title="Add Company">
            <ShareImage src={Kakao} />
          </a>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;

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

const ShareImage = styled.img`
  width: 3rem;
  margin: 1.5rem;

  @media screen and (max-width: 500px) {
    width: 2rem;
    margin: 1.25rem;
  }
`;
