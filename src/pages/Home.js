import React, {useEffect, useState } from "react";
import '../components/Home.css';
import { getFirestore, getDoc, setDoc, doc, updateDoc, increment, collection } from "firebase/firestore";
import styled from "styled-components";
import VoteCount from "../components/VoteCount";

export default function Home() {
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
        <>
        <BannerImg src="https://www.banggooso.com/ms/meme-awards/main-logo.png"/>
            <div className = 'HomeContainer HomeContainerScrolled'>
                <HomeText>
                    "WITH MEME WITH ME"<br/>
                    올 한 해, 당신에게 최고의 밈은 무엇인가요?
                    <br/><br/>
                    각 분야별 시상과 올해의 밈 시상은<br/>
                    2022.12.21 20시 유튜브 '이십세들'에서<br/>
                    온라인 시상식으로 진행됩니다.
                </HomeText>
            <Time className="time">
            ⏱&nbsp;투표 마감까지 남은 시간!&nbsp;⏱<br/>
            {day}일&nbsp;
            {hour < 10 ? '0' + hour : hour}시간&nbsp;
            {minute < 10 ? '0' + minute : minute}분&nbsp;
            {second < 10 ? '0' + second : second}초&nbsp;
            </Time>
            </div>
        </>
    )
}

const BannerImg = styled.img`
    width: 50%;
    margin-left: 25%;
    margin-top: 15%;
`;

const Time = styled.div`
    font-size: 2rem;
    text-align: center;
    line-height: 5rem;
    font-family: 'GmarketSansMedium';
`;

const HomeText = styled.div`
    text-align: center;
    font-size: 1.6rem;
    margin-bottom: 5rem;
`