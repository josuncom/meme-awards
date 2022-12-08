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

const getTop2 = async () => {
  let top2Meme = [];
  let top2Count = [];

  const db = getFirestore();
  const top2 = collection(db, "TOTAL");
  const q = query(top2, orderBy("count", "desc"), limit(2));
  const querySnapShot = await getDocs(q);

  querySnapShot.forEach((doc) => {
    top2Meme.push(doc.id);
    top2Count.push(doc.data().count);
  });

  return [top2Meme, top2Count];
};

export default function Top2() {
  const [memeInfo, setMemeInfo] = useState({ list: [], count: [] });

  useEffect(() => {
    getTop2().then(([top2Meme, top2Count]) => {
      setMemeInfo({
        list: top2Meme,
        count: top2Count,
      });
    });
  }, []);

  return (
    <Top2Container>
      <Top2Title>MEME OF THE YEAR</Top2Title>
      <Top2Subtitle>실시간 올해의 밈</Top2Subtitle>
      <Top2Image>
        <div className="top2-image-box">
          {memeInfo.list.map((item, idx) => {
            return (
              <img
                className={`meme rank${idx + 1}`}
                src={require(`../image/meme/${Top2Data[item]}.png`)}
                key={`meme-rank${idx + 1}`}
              />
            );
          })}
          <div className="top2-vs">VS</div>
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
                {item}표
              </div>
            );
          })}
        </TopMemeCount>
      </Top2Meme>
    </Top2Container>
  );
}

const Top2Container = styled.div`
  height: 600px;
  padding: 6.5rem 3rem;
`;

const Top2Title = styled.div`
  text-align: center;
  color: #faff00;
  font: "Cabin";
  font-size: 2rem;
  font-family: "SUITM";
  letter-spacing: 1px;
  font-weight: bold;
`;
const Top2Subtitle = styled.div`
  text-align: center;
  font-size: 5rem;
  margin-top: 1rem;
  font-family: "SUITM";
  color: white;
  font-weight: bold;
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
