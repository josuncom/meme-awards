import React from "react";
import styled from "styled-components";

import FakeMeme from "../image/fake-meme.png";

export default function Clock2() {
  const liveLink = "http://bit.ly/3uEb0Ii";

  return (
    <TimeContainer>
      <TimeTitle>MEME OF THE YEAR</TimeTitle>
      <TimeSubtitle>2022 올해의 밈은?</TimeSubtitle>
      <FakeMemeBox>
        <Fakememe src={FakeMeme} />
      </FakeMemeBox>
      <LiveTime>12월 21일 21시 LIVE</LiveTime>
      <Time className="time">
        <TimeBox>
          <TimeNum>00</TimeNum>
          <TimeText>DAYS</TimeText>
        </TimeBox>
        <TimeDot className="TimeDot">:</TimeDot>
        <TimeBox>
          <TimeNum>00</TimeNum>
          <TimeText>HOURS</TimeText>
        </TimeBox>
        <TimeDot className="TimeDot">:</TimeDot>
        <TimeBox>
          <TimeNum>00</TimeNum>
          <TimeText>MINUTES</TimeText>
        </TimeBox>
        <TimeDot className="TimeDot">:</TimeDot>
        <TimeBox>
          <TimeNum>00</TimeNum>
          <TimeText>SECONDS</TimeText>
        </TimeBox>
      </Time>
      <TimeBottom
        onClick={() => {
          window.open(liveLink);
        }}
      >
        <div style={{ marginLeft: "2rem", flex: "7" }}>
          밈어워즈 시상식에서 바로 확인하기
        </div>
        <div style={{ flex: "1" }}>〉</div>
      </TimeBottom>
    </TimeContainer>
  );
}

const TimeContainer = styled.div`
  height: 800px;
  padding: 7rem 0;
`;

const TimeTitle = styled.div`
  text-align: center;
  color: #faff00;
  font: "Cabin";
  font-size: 16px;
  font-family: "SUITM";
  letter-spacing: 1px;
  font-weight: bold;
`;

const TimeSubtitle = styled.div`
  text-align: center;
  font-size: 4.5rem;
  margin-top: 16px;
  font-family: "SUITM";
  color: white;
  font-weight: bold;
  line-height: 6rem;
`;

const Time = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  font-size: 2rem;
  text-align: center;
  line-height: 5rem;
  font-family: "SUITM";
  margin-top: 2rem;
`;

const TimeBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const TimeNum = styled.div`
  width: 8rem;
  height: 8rem;
  background: white;
  border-radius: 1rem;
  line-height: 8rem;
  font-family: "SUITM";
  font-weight: bold;
  font-size: 4rem;
  color: black;

  @media screen and (max-width: 500px) {
    width: 7rem;
    height: 7rem;
    line-height: 7rem;
    font-size: 3.5rem;
  }
`;
const TimeText = styled.div`
  text-align: center;
  color: white;
  font-family: "SUITM";
  font-size: 1.3rem;
  margin-top: -1.5rem;
`;
const TimeDot = styled.div`
  font-size: 3.5rem;
  color: white;
  font-family: "SUITM";
  line-height: 7rem;
  margin: 0 1rem;

  @media screen and (max-width: 500px) {
    margin: 0 0.5rem;
  }
`;

const TimeBottom = styled.div`
  display: flex;
  text-align: center;
  width: 85%;
  margin: auto;
  background: #faff00;
  margin-top: 1rem;
  cursor: pointer;
  font-family: "SUITM";
  font-weight: bold;
  font-size: 2rem;
  padding: 3rem 1rem;
  border-radius: 0.5rem;
  color: black;
  @media screen and (max-width: 500px) {
    font-size: 1.6rem;
  }
`;

const FakeMemeBox = styled.div`
  text-align: center;
`;
const Fakememe = styled.img`
  width: 20rem;
  margin: 2rem 0;
`;
const LiveTime = styled.div`
  color: #faff00;
  font-size: 3rem;
  font-family: "SUITM";
  text-align: center;
  @media screen and (max-width: 500px) {
    font-size: 2.5rem;
  }
`;
