import React, { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  query,
  limit,
  orderBy,
  getDocs,
  where,
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

const getTop = async () => {
  let topCount = [];
  let topMeme = [];
  const db = getFirestore();
  const top2 = collection(db, "TOTAL");
  const q = query(top2, orderBy("count", "desc"), limit(1));
  const querySnapShot = await getDocs(q);

  querySnapShot.forEach((doc) => {
    topCount.push(doc.data().count);
  });

  const mostCount = topCount[0];

  const q2 = query(collection(db, "TOTAL"), where("count", "==", mostCount));
  const querySnapShot2 = await getDocs(q2);

  querySnapShot2.forEach((doc) => {
    topMeme.push(doc.id);
  });

  return [topMeme];
};

export default function Top2() {
  const [memeInfo, setMemeInfo] = useState({ list: [], count: [] });
  const [firstPlace, setFirstPlace] = useState({ topMeme: [] });

  useEffect(() => {
    getTop2().then(([top2Meme, top2Count]) => {
      setMemeInfo({
        list: top2Meme,
        count: top2Count,
      });
    });

    getTop().then(([topMeme]) => {
      setFirstPlace({
        topMeme: topMeme,
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

  @media screen and (max-width: 380px) {
    margin-top: 1rem;
  }
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
