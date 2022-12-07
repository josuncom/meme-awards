import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Home from "./Home";
import Clock from "./Clock";
import Clock2 from "./Clock2";
import Vote from "./Vote";
import Footer from "./Footer";
import Top2 from "./Top2";
import Winner from "./Winner";
import Link from "./Link";
import LastAwards from "./LastAwardsVideo";

import "../css/Main.css";

import { Fragment } from "react";

export default function Main() {
  const { pathname } = useLocation();

  const currentTime = new Date();
  const voteDeadline = new Date("2022-12-18");
  const liveDay = new Date("2022-12-21");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Fragment>
      <Home />
      {currentTime < voteDeadline ? <Top2 /> : null}
      {/* 실시간 1,2등은 투표 마감 전까지만 나오도록 */}

      {currentTime < liveDay ? <LastAwards /> : null}
      {/* 임베드 영상은 라이브 시상식 전까지만 나오도록 */}
      
      {currentTime < voteDeadline ? (
        <Clock />
      ) : currentTime > liveDay ? (
        <Clock2 />
      ) : (
        <Winner />
      )}
      {/* 투표 마감 전까지만 Clock, 마감되면 Clock2 랜더링 */}
      {/* Clock2도 (1.투표 마감 - 라이브 / 2.라이브 이후) 로 분기 나눌 것*/}

      <Vote />
      <Link />

      <Footer />
    </Fragment>
  );
}
