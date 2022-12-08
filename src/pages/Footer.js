import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { KakaoShare, shareTwitter } from "../data/ShareAPI";
import "../css/Footer.css";

import Share from "../image/share.png";
import Kakao from "../image/kakao.png";
import Insta from "../image/insta.png";
import Twitter from "../image/twitter.png";

export default function Footer() {
  const [shareButton, setShareButton] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      setShareButton(true);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
          <a href="#">URL</a>
          <a href="#">
            <ShareImage src={Insta} />
          </a>
          <a onClick={() => shareTwitter("http://localhost:3000/")}>
            <ShareImage src={Twitter} />
          </a>
          <a
            id="kakao-button"
            onClick={() => KakaoShare("https://metavv.com", "2022 밈어워즈")}
          >
            <ShareImage src={Kakao} />
          </a>
        </div>
      </div>
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

const ShareImage = styled.img`
  width: 3rem;
  margin: 1.5rem;

  @media screen and (max-width: 500px) {
    width: 2rem;
    margin: 1.25rem;
  }
`;
