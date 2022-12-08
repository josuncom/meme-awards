import React from "react";
import styled from "styled-components";

export default function Link() {
  const liveUrl = "https://www.banggooso.com";
  const memeTestUrl = "https://www.metavv.com";
  const contactUrl = "https://twitter.com/banggooso";

  const currentTime = new Date();
  const voteDeadline = new Date("2022-12-18");
  const liveDay = new Date("2022-12-21");

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
          <LiveTime>12월 21일 20시 LIVE</LiveTime>
          <LinkBox
            onClick={() => {
              if (currentTime < liveDay) {
                alert("12월 21일 20시에 라이브로 시상식이 진행됩니다!");
              } else {
                window.open(liveUrl);
              }
            }}
          >
            <div style={{ marginLeft: "2rem", flex: "7" }}>
              밈어워즈 시상식에서 확인하기
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
              if (currentTime < liveDay) {
                alert("아직 준비 중인 콘텐츠입니다!");
              } else {
                window.open(memeTestUrl);
              }
            }}
          >
            <div style={{ marginLeft: "2rem", flex: "7" }}>
              2022 MEME TEST 하러가기
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
          <div style={{ marginLeft: "2rem", flex: "7", fontFamily: "SUITM" }}>
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
  font-size: 2rem;
  font-family: "SUITM";
  letter-spacing: 1px;
  font-weight: bold;
`;
const LinkSubtitle = styled.div`
  text-align: center;
  font-size: 5rem;
  margin-top: 1rem;
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
  text-align: center;
  width: 85%;
  margin: auto;
  background: #faff00;
  margin-top: 3rem;
  cursor: pointer;
  font-family: "SUITM";
  font-weight: bold;
  font-size: 2rem;
  padding: 3rem 1rem;
  border-radius: 0.5rem;

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
  padding: 3rem 1rem;
  border-radius: 0.5rem;
  color: white;

  @media screen and (max-width: 500px) {
    font-size: 1.5rem;
  }
`;
