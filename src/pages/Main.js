import React, { useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import "../css/Main.css";
import { AFTERLIVE, DEADLINE, LIVEDAY } from "../data/data";
import { KakaoShare, shareTwitter } from "../data/ShareAPI";
import Kakao from "../image/kakao.png";
import Share from "../image/share.png";
import Twitter from "../image/twitter.png";
import Clock from "./Clock";
import Clock2 from "./Clock2";
import Footer from "./Footer";
import Home from "./Home";
import LastAwards from "./LastAwardsVideo";
import Link from "./Link";
import Top2 from "./Top2";
import Vote from "./Vote";
import Winner from "./Winner";

export default function Main() {
  const { pathname } = useLocation();

  const currentTime = new Date();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <CopyText
        defaultValue="https://www.banggooso.com/ms/meme-awards/2022/"
        id="copy"
        data-clipboard-text="https://www.banggooso.com/ms/meme-awards/2022/"
      />
      <Home />
      {currentTime < DEADLINE ? <Top2 /> : <></>}
      {/* 실시간 1,2등은 투표 마감 전까지만 나오도록 */}

      {currentTime < LIVEDAY ? <LastAwards /> : <></>}
      {/* 임베드 영상은 라이브 시상식 전까지만 나오도록 */}

      {currentTime < DEADLINE ? (
        <Clock />
      ) : currentTime < AFTERLIVE ? (
        <Clock2 />
      ) : (
        <Winner />
      )}
      {/* 투표 마감 전까지만 Clock, 마감되면 Clock2 랜더링 */}
      {/* Clock2도 (1.투표 마감 - 라이브 / 2.라이브 이후) 로 분기 나눌 것*/}

      <Vote />
      <Link />

      <Footer />
      <div className="adminActions">
        <input type="checkbox" name="adminToggle" className="adminToggle" />
        <a className="share-button">
          <ShareImage src={Share} />
        </a>
        <div className="adminButtons">
          <CopyToClipboard
            text="https://www.banggooso.com/ms/meme-awards/2022/"
            onCopy={() => {
              alert("링크를 복사했습니다!");
            }}
          >
            <a
              className="copy-btn"
              data-clipboard-target="#copy"
              data-clipboard-action="copy"
            >
              URL
            </a>
          </CopyToClipboard>
          <a
            onClick={() =>
              shareTwitter("https://www.banggooso.com/ms/meme-awards/2022/")
            }
          >
            <ShareSNSImage
              style={{ marginTop: "8px" }}
              className="twitter-button"
              src={Twitter}
            />
          </a>
          <a
            id="kakao-button"
            onClick={() =>
              KakaoShare(
                "https://www.banggooso.com/ms/meme-awards/2022/",
                "2022 밈어워즈"
              )
            }
          >
            <ShareSNSImage
              className="kakao-button"
              style={{ marginTop: "8px" }}
              src={Kakao}
            />
          </a>
        </div>
      </div>
    </>
  );
}

const ShareImage = styled.img`
  width: 3rem;
  margin: 1.4rem;
  margin-top: 8px;

  @media screen and (max-width: 500px) {
    width: 2rem !important;
    margin: 1.1rem !important;
  }
`;

const ShareSNSImage = styled.img`
  width: 3rem;
  margin: 1.4rem;
  margin-top: 8px;

  @media screen and (max-width: 500px) {
    width: 2rem !important;
    margin: 1.1rem !important;
    margin-top: 8px !important;
  }
`;

const CopyText = styled.input`
  display: none;
`;
