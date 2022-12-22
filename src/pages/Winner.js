import React, { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  query,
  limit,
  orderBy,
  getDocs,
} from "firebase/firestore";
import styled from "styled-components";
import "../css/Top2.css";
import { Top2Data } from "../data/data.js";

import BG from "../image/bg.png";

const getFirstPlace = async () => {
  let topMeme = [];
  let topCount = [];

  const db = getFirestore();
  const top2 = collection(db, "TOTAL");
  const q = query(top2, orderBy("count", "desc"), limit(1));
  const querySnapShot = await getDocs(q);

  querySnapShot.forEach((doc) => {
    topMeme.push(doc.id);
    topCount.push(doc.data().count);
  });

  return [topMeme, topCount];
};

export default function Winner() {
  const [memeInfo, setMemeInfo] = useState({ list: [], count: [] });

  useEffect(() => {
    getFirstPlace().then(([topMeme, topCount]) => {
      setMemeInfo({
        list: topMeme,
        count: topCount,
      });
    });
  }, []);

  return (
    <Top2Container>
      <Top2Title>MEME OF THE YEAR</Top2Title>
      <Top2Subtitle>올해의 밈</Top2Subtitle>
      <Top2Image>
        <div className="top2-image-box">
          {memeInfo.list.map((item, idx) => {
            return (
              <img
                className={`meme rank${idx + 1}`}
                src={require(`../image/meme/${Top2Data[item]}.png`)}
                key={`meme-rank${idx + 1}`}
                alt="부문별 1위"
              />
            );
          })}
        </div>
      </Top2Image>
      <Top2Meme>
        <TopMemeName>
          {memeInfo.list.map((item, idx) => {
            return (
              <div className={`topMeme top${idx + 1}`} key={item}>
                {item}
              </div>
            );
          })}
        </TopMemeName>
        <TopMemeCount>
          {memeInfo.count.map((item, idx) => {
            return (
              <div className={`memeCount top${idx + 1}`} key={`top${idx + 1}`}>
                {new Intl.NumberFormat("en-US").format(item)}표
              </div>
            );
          })}
        </TopMemeCount>
      </Top2Meme>
    </Top2Container>
  );
}

const Top2Container = styled.div`
  padding: 10rem 3rem;
  background-image: url(${BG});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const Top2Title = styled.div`
  text-align: center;
  color: #faff00;
  font-size: 16px;
  font-family: "SUITB";
  letter-spacing: 1px;
  text-shadow: 0 0 #faff00;
`;
const Top2Subtitle = styled.div`
  text-align: center;
  font-size: 5rem;
  margin-top: 16px;
  font-family: "SUITB";
  color: white;
  line-height: 6rem;

  @media screen and (max-width: 500px) {
    font-size: 4rem;
  }
`;

const Top2Meme = styled.div`
  text-align: center;
  margin-top: 3rem;
`;

const TopMemeName = styled.div`
  display: flex;
  justify-content: center;
`;

const TopMemeCount = styled.div`
  display: flex;
  justify-content: center;
`;

const Top2Image = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
`;
