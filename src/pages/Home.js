import React, {useEffect, useState } from "react";
import '../components/Home.css';
import '.././'
import { getFirestore, getDoc, setDoc, doc, updateDoc, increment, collection } from "firebase/firestore";
import styled from "styled-components";

import Banner from '../image/main.jpg';
import slideIcon1 from '../image/icon-1.svg';
import slideIcon2 from '../image/icon-2.svg';
import slideIcon3 from '../image/icon-3.svg';

export default function Home() {
    
    return(
        <>
            <BannerImg src={Banner}/>
            <div className = 'HomeContainer HomeContainerScrolled'>
            <div className="slider">
                <div className="slider-track">
		            <div className="slide">
                        우to the영to the우!
		            </div>
                    <div className="slide-icon">
                        <img className="slide-icon" src={slideIcon1}/>
                    </div>
		            <div className="slide">
			            너 뭐 돼?
		            </div>
                    <div className="slide-icon">
                        <img className="slide-icon" src={slideIcon2}/>
                    </div>
		            <div className="slide">
			            킹받드라슈
		            </div>
                    <div className="slide-icon">
                        <img className="slide-icon" src={slideIcon3}/>
                    </div>
		            <div className="slide">
			            내일 봬요 누나
		            </div>
                    <div className="slide-icon">
                        <img className="slide-icon" src={slideIcon1}/>
                    </div>
		            <div className="slide">
			            재즈가 뭐라고 생각하세요?
		            </div>
                    <div className="slide-icon">
                        <img className="slide-icon" src={slideIcon2}/>
                    </div>
		            <div className="slide">
			            저는 ?? 아티스트예요.
		            </div>
                    <div className="slide-icon">
                        <img className="slide-icon" src={slideIcon3}/>
                    </div>
		            <div className="slide">
			            너 납치 된거야
		            </div>
                    <div className="slide-icon">
                        <img className="slide-icon" src={slideIcon1}/>
                    </div>
		            <div className="slide">
			            내 장점이 뭔 지 알아?
		            </div>
                    <div className="slide-icon">
                        <img className="slide-icon" src={slideIcon2}/>
                    </div>
                    <div className="slide">
			            ㄴ겟냐
		            </div>
                    <div className="slide-icon">
                        <img className="slide-icon" src={slideIcon3}/>
                    </div>
                    <div className="slide">
			            어이~ 강프로, 식사는 잡쉈어?
		            </div>
                    <div className="slide-icon">
                        <img className="slide-icon" src={slideIcon1}/>
                    </div>
                    <div className="slide">
			            하남자 특
		            </div>
                    <div className="slide-icon">
                        <img className="slide-icon" src={slideIcon2}/>
                    </div>
                    <div className="slide">
			            그잡채
		            </div>
                    <div className="slide-icon">
                        <img className="slide-icon" src={slideIcon3}/>
                    </div>
                    <div className="slide">
                        우to the영to the우!
		            </div>
                    <div className="slide-icon">
                        <img className="slide-icon" src={slideIcon1}/>
                    </div>
		            <div className="slide">
			            너 뭐 돼?
		            </div>
                    <div className="slide-icon">
                        <img className="slide-icon" src={slideIcon2}/>
                    </div>
		            <div className="slide">
			            킹받드라슈
		            </div>
                    <div className="slide-icon">
                        <img className="slide-icon" src={slideIcon3}/>
                    </div>
		            <div className="slide">
			            내일 봬요 누나
		            </div>
                    <div className="slide-icon">
                        <img className="slide-icon" src={slideIcon1}/>
                    </div>
		            <div className="slide">
			            재즈가 뭐라고 생각하세요?
		            </div>
                    <div className="slide-icon">
                        <img className="slide-icon" src={slideIcon2}/>
                    </div>
		            <div className="slide">
			            저는 ?? 아티스트예요.
		            </div>
                    <div className="slide-icon">
                        <img className="slide-icon" src={slideIcon3}/>
                    </div>
		            <div className="slide">
			            너 납치 된거야
		            </div>
                    <div className="slide-icon">
                        <img className="slide-icon" src={slideIcon1}/>
                    </div>
		            <div className="slide">
			            내 장점이 뭔 지 알아?
		            </div>
                    <div className="slide-icon">
                        <img className="slide-icon" src={slideIcon2}/>
                    </div>
                    <div className="slide">
			            ㄴ겟냐
		            </div>
                    <div className="slide-icon">
                        <img className="slide-icon" src={slideIcon3}/>
                    </div>
                    <div className="slide">
			            어이~ 강프로, 식사는 잡쉈어?
		            </div>
                    <div className="slide-icon">
                        <img className="slide-icon" src={slideIcon1}/>
                    </div>
                    <div className="slide">
			            하남자 특
		            </div>
                    <div className="slide-icon">
                        <img className="slide-icon" src={slideIcon2}/>
                    </div>
                    <div className="slide">
			            그잡채
		            </div>
                    <div className="slide-icon">
                        <img className="slide-icon" src={slideIcon3}/>
                    </div>
                </div>
            </div>
                <HomeText>
                    <HomeMainTtitle>
                        WITH MEME<br/>
                        WITH ME,<br/>
                    </HomeMainTtitle>
                    <HomeMainText>
                        올 한 해,<br/>
                        당신에게<br/>
                        최고의 밈은<br/>
                        무엇인가요?
                    </HomeMainText>
                    <br/><br/>
                    <HomeSubText>
                        ‘밈’ 만큼 우리 문화를 잘 보여주는 것이 있을까요?<br/>
                        문화를 넘어 시대의 아이콘으로 자리 잡은 밈,<br/>
                        올해 최고의 밈에 투표해 주세요!
                    </HomeSubText>
                </HomeText>
            </div>
        </>
    )
}

const BannerImg = styled.img`
    width: 100%;
    margin: 0;
`;

const HomeText = styled.div`
    text-align: center;
    font-size: 1.6rem;
    font-family: 'Cabin', sans-serif !important;
    text-align: left;
    font-weight: bold;
    background: #0a0a0a;
    padding: 2rem 3rem;
    padding-bottom: 5rem;
`

const HomeMainTtitle = styled.div`
    font-size: 5rem;
    color: #FAFF00;
    margin-top: 5rem;
    line-height: 5rem;
    font-family: 'Cabin', sans-serif !important;
`
const HomeMainText = styled.div`
    margin-top: 5rem;
    font-size: 5.5rem;
    font-family: 'Cabin', sans-serif !important;
    
    @media screen and (max-width: 500px){
        font-size: 4.5rem;
    }

`

const HomeSubText= styled.div`
    font-size: 1.5rem;
    font-weight: 100;
    font-family: 'Cabin', sans-serif !important;
    line-height: 3rem;
    @media screen and (max-width: 500px){
        font-size: 1.3rem;
    }
`