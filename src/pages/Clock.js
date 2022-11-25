import { React, useState, useEffect} from "react";
import styled from "styled-components";

export default function(){
    const voteEndTime = new Date("2022-12-08");
    const todayTime = new Date();
    const remainingTime = voteEndTime - todayTime;
    
    const [day, setDay] = useState("");
    const [hour, setHour] = useState("");
    const [minute, setMinute] = useState("");
    const [second, setSecond] = useState("");

    useEffect(() => {
        const diffDay = Math.floor(remainingTime / (1000*60*60*24));
        const diffHour = Math.floor((remainingTime / (1000*60*60)) % 24);
        const diffMin = Math.floor((remainingTime / (1000*60)) % 60);
        const diffSec = Math.floor(remainingTime / 1000 % 60);

        const id = setInterval(() => {
          setDay(diffDay)
          setHour(diffHour);
          setMinute(diffMin);
          setSecond(diffSec);
        }, 1000);
        // 1초마다 실행되는 인터벌을 이용해 1초마다 다시 랜더링 시켜줌
        return () => clearInterval(id);
        // 페이지를 벗어나게되면 반복을 종료해줌
      }, [remainingTime]);

      return(
        <TimeContainer>
            <TimeTitle>
                MEME AWARDS VOTE
            </TimeTitle>
            <TimeSubtitle>
                여러분의 밈에<br/>
                투표해 주세요!  
            </TimeSubtitle>
            <Time className="time">
                <TimeBox>{day}</TimeBox>:
                <TimeBox>{hour < 10 ? '0' + hour : hour}</TimeBox>:
                <TimeBox>{minute < 10 ? '0' + minute : minute}</TimeBox>:
                <TimeBox>{second < 10 ? '0' + second : second}</TimeBox>
            </Time>
        </TimeContainer>
        
        
      )
}

const TimeContainer = styled.div`
    background: #0a0a0a;
    height: 500px;
    padding: 6.5rem 3rem;
`

const TimeTitle = styled.div`
    text-align: center;
    color: #FAFF00;
    font: 'Cabin';
    font-size: 2rem;
    font-family: 'Cabin';
    letter-spacing: 1px;
`

const TimeSubtitle = styled.div`
    text-align: center;
    font-size: 5rem;
    margin-top: 1rem;
    font-family: 'Cabin';
    color: white;
    font-weight: bold;
    line-height: 6rem;
`

const Time = styled.div`
    position: relative;
    display : flex;
    justify-content: center;
    font-size: 2rem;
    text-align: center;
    line-height: 5rem;
    font-family: 'Cabin';

    &:after{
        content: ""
        display : block;
        padding-bottom: 100%;
    };
`;

const TimeBox = styled.div`
    width: 8rem;
    height: 8rem;
    background: white;
    border-radius: 2rem;
`