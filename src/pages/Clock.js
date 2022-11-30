import { React, useState, useEffect } from "react";
import styled from "styled-components";

import CircleDown from "../image/Clock_circle_down.png";

export default function () {
  const voteEndTime = new Date("2022-12-21");
  const todayTime = new Date();
  const remainingTime = voteEndTime - todayTime;

  const [time, setTime] = useState(remainingTime);
  const [day, setDay] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [second, setSecond] = useState("");

  // console.log(remainingTime);

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
      <TimeTitle>MEME AWARDS VOTE</TimeTitle>
      <TimeSubtitle>
        여러분의 밈에
        <br />
        투표해 주세요!
      </TimeSubtitle>
      <Time className="time">
        <TimeBox>
          <TimeNum>{day}</TimeNum>
          <TimeText>DAYS</TimeText>
        </TimeBox>
        <TimeDot className="TimeDot">:</TimeDot>
        <TimeBox>
          <TimeNum>{hour < 10 ? "0" + hour : hour}</TimeNum>
          <TimeText>HOURS</TimeText>
        </TimeBox>
        <TimeDot className="TimeDot">:</TimeDot>
        <TimeBox>
          <TimeNum>{minute < 10 ? "0" + minute : minute}</TimeNum>
          <TimeText>MINUTES</TimeText>
        </TimeBox>
        <TimeDot className="TimeDot">:</TimeDot>
        <TimeBox>
          <TimeNum>{second < 10 ? "0" + second : second}</TimeNum>
          <TimeText>SECONDS</TimeText>
        </TimeBox>
      </Time>
      <TimeBottom>
        TV/OTT, SNS, 챌린지 포함
        <br />총 <span style={{ color: "#FAFF00" }}>6개 부문</span>에 투표가
        가능합니다.
      </TimeBottom>
      <TimeImageBox>
        <img style={{ width: "5rem" }} src={CircleDown} />
      </TimeImageBox>
    </TimeContainer>
  );
}

const TimeContainer = styled.div`
  background: #1d1d1d;
  height: 600px;
  padding: 7rem 0;
`;

const TimeTitle = styled.div`
  text-align: center;
  color: #faff00;
  font: "Cabin";
  font-size: 2rem;
  font-family: "SUITM";
  letter-spacing: 1px;
  font-weight: bold;
`;

const TimeSubtitle = styled.div`
  text-align: center;
  font-size: 4.5rem;
  margin-top: 1rem;
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
  text-align: center;
  color: white;
  font-family: "SUITM";
  font-size: 2.2rem;
  margin-top: 5rem;

  @media screen and (max-width: 500px) {
    font-size: 2rem;
  }
`;

const TimeImageBox = styled.div`
  text-align: center;
  margin-top: 1rem;
`;
