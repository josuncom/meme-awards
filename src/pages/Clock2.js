import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { AFTERLIVE, LIVEDAY } from "../data/data";

import FakeMeme from "../image/fake-meme.png";

export default function Clock2() {
  const liveLink = "https://www.youtube.com/live/fZ56LKJS7cw?feature=share";

  const currentTime = new Date();
  const remainingTime = LIVEDAY - currentTime;

  const [time, setTime] = useState(remainingTime);
  const [day, setDay] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [second, setSecond] = useState("");

  useEffect(() => {
    const diffDay = Math.floor(time / (1000 * 60 * 60 * 24));
    const diffHour = Math.floor((time / (1000 * 60 * 60)) % 24);
    const diffMin = Math.floor((time / (1000 * 60)) % 60);
    const diffSec = Math.floor((time / 1000) % 60);

    const id = setInterval(() => {
      setTime(time - 1000);
      setDay(diffDay);
      setHour(diffHour);
      setMinute(diffMin);
      setSecond(diffSec);
    }, 1000);
    // 1초마다 실행되는 인터벌을 이용해 1초마다 다시 랜더링 시켜줌
    return () => clearInterval(id);
    // 페이지를 벗어나게되면 반복을 종료해줌
  }, [time]);

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
          <TimeNum>{day > 0 ? day : 0}</TimeNum>
          <TimeText>DAYS</TimeText>
        </TimeBox>
        <TimeDot className="TimeDot">:</TimeDot>
        <TimeBox>
          <TimeNum>{hour < 0 ? 0 : hour < 10 ? "0" + hour : hour}</TimeNum>
          <TimeText>HOURS</TimeText>
        </TimeBox>
        <TimeDot className="TimeDot">:</TimeDot>
        <TimeBox>
          <TimeNum>
            {minute < 0 ? 0 : minute < 10 ? "0" + minute : minute}
          </TimeNum>
          <TimeText>MINUTES</TimeText>
        </TimeBox>
        <TimeDot className="TimeDot">:</TimeDot>
        <TimeBox>
          <TimeNum>
            {second < 0 ? 0 : second < 10 ? "0" + second : second}
          </TimeNum>
          <TimeText>SECONDS</TimeText>
        </TimeBox>
      </Time>
      <TimeBottom
        onClick={() => {
          window.open(liveLink);
        }}
      >
        <TimeButton>
          {currentTime > LIVEDAY
            ? "밈어워즈 시상식에서 바로 확인하기"
            : "시상식 알림 설정하러 가기"}
        </TimeButton>
        <div style={{ flex: "1", textAlign: "right" }}>〉</div>
      </TimeBottom>
    </TimeContainer>
  );
}

const TimeContainer = styled.div`
  padding: 3rem 0;
`;

const TimeTitle = styled.div`
  text-align: center;
  color: #faff00;
  font: "Cabin";
  font-size: 16px;
  font-family: "SUITB";
  letter-spacing: 1px;
  text-shadow: 0 0 #faff00;
`;

const TimeSubtitle = styled.div`
  text-align: center;
  font-size: 4.2rem;
  margin-top: 16px;
  font-family: "SUITB";
  color: white;
  line-height: 6rem;

  @media screen and (max-width: 500px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 380px) {
    font-size: 3.8rem;
  }
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

  @media screen and (max-width: 380px) {
    width: 85%;
    margin-left: 7.5%;
  }
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

  @media screen and (max-width: 380px) {
    width: 5.5rem;
    height: 5.5rem;
    line-height: 5.5rem;
    font-size: 2.8rem;
  }
`;
const TimeText = styled.div`
  text-align: center;
  color: white;
  font-family: "SUITM";
  font-size: 1.3rem;
  margin-top: -1rem;
  @media screen and (max-width: 380px) {
    font-size: 1.1rem;
  }
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
  padding: 3rem 2rem;
  border-radius: 0.5rem;
  color: black;
  font-size: 2.2rem;

  @media screen and (max-width: 500px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 380px) {
    font-size: 1.6rem;
  }
`;

const TimeButton = styled.div`
  margin: auto;
  flex: 7;
  text-align: left;
  font-size: 2.2rem;

  @media screen and (max-width: 500px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 380px) {
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
