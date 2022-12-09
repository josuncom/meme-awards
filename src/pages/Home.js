import React from "react";
import "../css/Home.css";
import styled from "styled-components";

import Banner from "../image/main.jpg";
import slideIcon1 from "../image/icon-1.svg";
import slideIcon2 from "../image/icon-2.svg";
import slideIcon3 from "../image/icon-3.svg";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      kakao.init(process.env.REACT_APP_SHARE_KAKAO_LINK_KEY);
    }
  }, []);

  return (
    <>
      <BannerImg src={Banner} />
      <div className="HomeContainer HomeContainerScrolled">
        <div className="slider">
          <div className="slider-track">
            <div>
              <div className="slide">우 to the 영 to the 우!</div>
              <div className="slide-icon">
                <img className="slide-icon" src={slideIcon1} />
              </div>
              <div className="slide">너 혹시 뭐 돼?</div>
              <div className="slide-icon">
                <img className="slide-icon" src={slideIcon2} />
              </div>
              <div className="slide">킹받드라슈</div>
              <div className="slide-icon">
                <img className="slide-icon" src={slideIcon3} />
              </div>
              <div className="slide">내일 봬요 누나</div>
              <div className="slide-icon">
                <img className="slide-icon" src={slideIcon1} />
              </div>
              <div className="slide">재즈가 뭐라고 생각하세요?</div>
              <div className="slide-icon">
                <img className="slide-icon" src={slideIcon2} />
              </div>
              <div className="slide">저는 ?? 아티스트예요.</div>
              <div className="slide-icon">
                <img className="slide-icon" src={slideIcon3} />
              </div>
              <div className="slide">너 납치된 거야</div>
              <div className="slide-icon">
                <img className="slide-icon" src={slideIcon1} />
              </div>
              <div className="slide">내 장점이 뭔지 알아?</div>
              <div className="slide-icon">
                <img className="slide-icon" src={slideIcon2} />
              </div>
              <div className="slide">ㄴ겠냐</div>
              <div className="slide-icon">
                <img className="slide-icon" src={slideIcon3} />
              </div>
              <div className="slide">어이, 강프로 식사는 잡쉈어?</div>
              <div className="slide-icon">
                <img className="slide-icon" src={slideIcon1} />
              </div>
              <div className="slide">하남자 특)</div>
              <div className="slide-icon">
                <img className="slide-icon" src={slideIcon2} />
              </div>
              <div className="slide">그 잡채</div>
              <div className="slide-icon">
                <img className="slide-icon" src={slideIcon3} />
              </div>
              <div className="slide">우 to the 영 to the 우!</div>
              <div className="slide-icon">
                <img className="slide-icon" src={slideIcon1} />
              </div>
              <div className="slide">너 혹시 뭐 돼?</div>
              <div className="slide-icon">
                <img className="slide-icon" src={slideIcon2} />
              </div>
              <div className="slide">킹받드라슈</div>
              <div className="slide-icon">
                <img className="slide-icon" src={slideIcon3} />
              </div>
              <div className="slide">내일 봬요 누나</div>
              <div className="slide-icon">
                <img className="slide-icon" src={slideIcon1} />
              </div>
              <div className="slide">재즈가 뭐라고 생각하세요?</div>
              <div className="slide-icon">
                <img className="slide-icon" src={slideIcon2} />
              </div>
              <div className="slide">저는 ?? 아티스트예요.</div>
              <div className="slide-icon">
                <img className="slide-icon" src={slideIcon3} />
              </div>
              <div className="slide">너 납치된 거야</div>
              <div className="slide-icon">
                <img className="slide-icon" src={slideIcon1} />
              </div>
              <div className="slide">내 장점이 뭔지 알아?</div>
              <div className="slide-icon">
                <img className="slide-icon" src={slideIcon2} />
              </div>
              <div className="slide">ㄴ겠냐</div>
              <div className="slide-icon">
                <img className="slide-icon" src={slideIcon3} />
              </div>
              <div className="slide">어이, 강프로 식사는 잡쉈어?</div>
              <div className="slide-icon">
                <img className="slide-icon" src={slideIcon1} />
              </div>
              <div className="slide">하남자 특)</div>
              <div className="slide-icon">
                <img className="slide-icon" src={slideIcon2} />
              </div>
              <div className="slide">그 잡채</div>
              <div className="slide-icon">
                <img className="slide-icon" src={slideIcon3} />
              </div>
            </div>
          </div>
        </div>
        <HomeText>
          <HomeMainTtitle>
            WITH MEME
            <br />
            WITH ME,
            <br />
          </HomeMainTtitle>
          <HomeMainText>
            올 한 해,
            <br />
            당신에게
            <br />
            최고의 밈은
            <br />
            무엇인가요?
          </HomeMainText>
          <br />
          <br />
          <HomeSubText>
            ‘밈’ 만큼 우리 문화를 잘 보여주는 것이 있을까요?
            <br />
            문화를 넘어 시대의 아이콘으로 자리 잡은 밈,
            <br />
            올해 최고의 밈에 투표해 주세요!
          </HomeSubText>
        </HomeText>
      </div>
    </>
  );
}

const BannerImg = styled.img`
  width: 100%;
  margin: 0;
`;
const HomeText = styled.div`
  text-align: center;
  font-size: 1.6rem;
  font-family: "SUITM";
  text-align: left;
  font-weight: bold;
  background: #1d1d1d;
  padding: 2rem 3rem;
  padding-bottom: 5rem;
`;
const HomeMainTtitle = styled.div`
  font-size: 5rem;
  color: #faff00;
  margin-top: 5rem;
  line-height: 5rem;
  font-family: "SUITM";
  @media screen and (max-width: 500px) {
    font-size: 4.5rem;
  }
`;
const HomeMainText = styled.div`
  margin-top: 5rem;
  font-size: 5.5rem;
  font-family: "SUITM";

  @media screen and (max-width: 500px) {
    font-size: 4.5rem;
  }
`;
const HomeSubText = styled.div`
  font-size: 1.5rem;
  font-weight: normal;
  line-height: 3rem;
  @media screen and (max-width: 500px) {
    font-size: 1.4rem;
  }
`;
