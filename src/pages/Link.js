import React from "react";
import styled from "styled-components";
import { AFTERLIVE, DEADLINE, LIVEDAY } from "../data/data";

export default function Link() {
  const contactUrl = "https://twitter.com/banggooso";
  const liveLink = "http://bit.ly/3uEb0Ii";
  const testLink = "https://bityl.co/G6Qc";

  const currentTime = new Date();

  return (
    <>
      <LinkContainer>
        <AwardsLink>
          <LinkTitle>ONLINE AWARDS</LinkTitle>
          <LinkSubtitle>
            내 손으로 뽑은
            <br />
            올해 최고의 밈은?
          </LinkSubtitle>
          <LiveTime>12월 21일 21시 LIVE</LiveTime>
          <LinkBox
            onClick={() => {
              window.open(liveLink);
            }}
          >
            <div style={{ marginLeft: "2rem", flex: "7" }}>
              {currentTime < DEADLINE
                ? "시상식 알림 설정하러 가기"
                : currentTime < AFTERLIVE
                ? "밈 어워즈 시상식 보러 가기"
                : "밈 어워즈 시상식 다시보기"}
            </div>
            <div style={{ flex: "1" }}>〉</div>
          </LinkBox>
        </AwardsLink>
        <MemeTestLink>
          <LinkTitle>2022 MEME TEST</LinkTitle>
          <LinkSubtitle>
            나의 밈 레벨이
            <br />
            궁금하다면?
          </LinkSubtitle>
          <LinkBox
            onClick={() => {
              window.open(testLink);
            }}
          >
            <div style={{ textAlign: "left", marginLeft: "2.5rem", flex: "7" }}>
              2022 MEME TEST 하러 가기
            </div>
            <div style={{ flex: "1" }}>〉</div>
          </LinkBox>
        </MemeTestLink>
      </LinkContainer>
      <ContactBox>
        <LinkTitle>CONTACT US!</LinkTitle>
        <LinkSubtitle>
          밈 어워즈의
          <br />
          빠른 소식과 제보는?
        </LinkSubtitle>
        <ContactLinkBox
          onClick={() => {
            window.open(contactUrl);
          }}
        >
          <div
            style={{
              textAlign: "left",
              marginLeft: "2.5rem",
              flex: "7",
              fontFamily: "SUITM",
            }}
          >
            twitter @banggooso
          </div>
          <div style={{ flex: "1" }}>〉</div>
        </ContactLinkBox>
      </ContactBox>
    </>
  );
}

const LinkContainer = styled.div`
  padding: 7rem 0;
  background: #1d1d1d;
`;
const AwardsLink = styled.div`
  background: #1d1d1d;
`;
const MemeTestLink = styled.div`
  margin-top: 7rem;
  background: #1d1d1d;
  padding: 7rem 0;
`;
const LinkTitle = styled.div`
  text-align: center;
  color: #faff00;
  font: "Cabin";
  font-size: 16px;
  font-family: "SUITM";
  letter-spacing: 1px;
  font-weight: bold;
  text-shadow: 0 0 #faff00;
`;
const LinkSubtitle = styled.div`
  text-align: center;
  font-size: 5rem;
  margin-top: 16px;
  font-family: "SUITM";
  color: white;
  font-weight: bold;
  line-height: 6rem;

  @media screen and (max-width: 500px) {
    font-size: 4rem;
  }
`;

const LiveTime = styled.div`
  text-align: center;
  color: #faff00;
  font-family: "SUITM";
  font-size: 3rem;
  margin-top: 2rem;
  font-weight: bold;
`;

const LinkBox = styled.div`
  display: flex;
  text-align: left;
  width: 85%;
  margin: auto;
  background: #faff00;
  margin-top: 3rem;
  cursor: pointer;
  font-family: "SUITM";
  font-weight: bold;
  font-size: 2.2rem;
  padding: 3rem 1rem;
  border-radius: 0.5rem;
  color: #1d1d1d;

  @media screen and (max-width: 500px) {
    font-size: 1.6rem;
  }
`;
const ContactBox = styled.div`
  margin: 10rem 0;
`;
const ContactLinkBox = styled.div`
  display: flex;
  text-align: center;
  width: 85%;
  margin: auto;
  background: #1d1d1d;
  margin-top: 3rem;
  cursor: pointer;
  font-family: "SUITM";
  font-size: 2rem;
  padding: 3rem 2rem;
  border-radius: 0.5rem;
  color: white;

  @media screen and (max-width: 500px) {
    font-size: 1.5rem;
  }
`;
