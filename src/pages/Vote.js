import { useEffect, useState, useRef, React } from "react";
import "../css/Vote.css";
import {
  getFirestore,
  doc,
  updateDoc,
  increment,
  getDoc,
  getDocs,
  collection,
} from "firebase/firestore";
import styled from "styled-components";

import Guide from "../image/Vote_intro.png";
import Done from "../image/vote_done.png";
import CircleDown from "../image/Clock_circle_down.png";

import {
  descriptions,
  DEADLINE,
  BEFORE_DEADLINE,
  LIVEDAY,
  AFTERLIVE,
} from "../data/data";

// 투표 시 시간차를 두고 다음 부문으로 스크롤
const handleScroll = (destination) => {
  let voteBox1 = document.querySelector(".voteBox1");
  let voteBox2 = document.querySelector(".voteBox2");
  let voteBox3 = document.querySelector(".voteBox3");
  let voteBox4 = document.querySelector(".voteBox4");
  let voteBox5 = document.querySelector(".voteBox5");
  let voteBox6 = document.querySelector(".voteBox6");

  let voteBoxPosition = {
    TV_OTT: voteBox1.offsetTop,
    CONTENT: voteBox2.offsetTop,
    SNS_COMMUNITY: voteBox3.offsetTop,
    MEMEPOSE: voteBox4.offsetTop,
    SPORTS: voteBox5.offsetTop,
    CHARACTER: voteBox6.offsetTop,
  };

  switch (destination) {
    case "TV_OTT":
      scrollMove(voteBoxPosition["CONTENT"], -20);
      break;
    case "CONTENT":
      scrollMove(voteBoxPosition["SNS_COMMUNITY"], -20);
      break;
    case "SNS_COMMUNITY":
      scrollMove(voteBoxPosition["MEMEPOSE"], -20);
      break;
    case "MEMEPOSE":
      scrollMove(voteBoxPosition["SPORTS"], -20);
      break;
    case "SPORTS":
      scrollMove(voteBoxPosition["CHARACTER"], -20);
      break;
    default:
      scrollMove(voteBoxPosition["CHARACTER"], 700);
  }
};

const scrollMove = (destination, additional) => {
  setTimeout(() => {
    window.scrollTo(destination + additional, destination + additional);
  }, 500);
};

const getTotalVoteCount = async () => {
  let totalCount = 0;

  const db = getFirestore();
  const totalCountRef = doc(db, "SUM", "COUNT");
  const querySnapShot = await getDoc(totalCountRef);

  totalCount = querySnapShot.data().count;

  return totalCount;
};

const getCurrentCount = async () => {
  let countArray = {};

  const db = getFirestore();
  const docSnap = await getDocs(collection(db, "TOTAL"));
  docSnap.forEach((doc) => {
    countArray[doc.id] = doc.data();
  });

  return countArray;
};

export default function Vote() {
  const [totalVoteCount, setTotalVoteCount] = useState(0);
  const [partialVoteCount, setPartialVotecount] = useState({});

  let currentTime = new Date();

  const [isVoted, setIsVoted] = useState({
    TV_OTT: false,
    CONTENT: false,
    SNS_COMMUNITY: false,
    MEMEPOSE: false,
    SPORTS: false,
    CHARACTER: false,
  });

  const [btnActive, setBtnActive] = useState({
    TV_OTT: "",
    CONTENT: "",
    SNS_COMMUNITY: "",
    MEMEPOSE: "",
    SPORTS: "",
    CHARACTER: "",
  });

  const nominationIndex = ["1", "2", "3", "4"];

  const toggleActive = (e, part) => {
    // 각 후보에 해당하는 DIV toggle용
    if (btnActive[part] === "") {
      if (e.target.tagName == "DIV") {
        setBtnActive({
          ...btnActive,
          [part]: e.target.parentNode.parentNode.getAttribute("value"),
        });
      } else {
        setBtnActive({
          ...btnActive,
          [part]: e.target.parentNode.getAttribute("value"),
        });
        e.stopPropagation();
      }
    }
  };

  const updateTotalCount = async (memeName) => {
    // 총 투표수 업데이트
    const db = getFirestore();
    const sumRef = doc(db, "SUM", "COUNT");
    const partialRef = doc(db, "TOTAL", memeName);
    await updateDoc(partialRef, {
      count: increment(1),
    });
    await updateDoc(sumRef, {
      count: increment(1),
    });
  };

  const voteMeme = async (memeType, memeName) => {
    // 투표 반영
    const db = getFirestore();
    const memeRefArray = doc(db, memeType, memeName);
    await updateDoc(memeRefArray, {
      count: increment(1),
    });
    updateTotalCount(memeName);
  };

  const setData = (memeName, event, part) => {
    // state 확인 후 투표한 부문이면 재투표 방지
    if (currentTime < DEADLINE) {
      toggleActive(event, part);
      if (isVoted[part] === false) {
        setIsVoted((prev) => {
          let newIsVoted = { ...prev };
          newIsVoted[part] = true;
          return newIsVoted;
        });
        voteMeme(part, memeName);
        handleScroll(part);
      } else {
        alert("이미 해당 부문에 투표했습니다!");
        event.stopPropagation();
      }
    } else {
      alert("투표가 종료됐습니다!");
      event.stopPropagation();
    }
  };

  useEffect(() => {
    getTotalVoteCount().then((voteCount) => {
      setTotalVoteCount(voteCount);
    });

    getCurrentCount().then((countResult) => {
      Object.entries(countResult).forEach((item) => {
        setPartialVotecount((prev) => {
          let newCount = { ...prev };
          newCount[item[0]] = item[1];
          return newCount;
        });
      });
    });
  }, []);

  return (
    <>
      <VoteContainer>
        {currentTime < DEADLINE ? (
          <VoteIntro>
            <VoteTitle>START VOTING</VoteTitle>
            <VoteSubtitle>투표? 가보자고</VoteSubtitle>
            {currentTime < BEFORE_DEADLINE ? (
              <></>
            ) : (
              <DeadlineText>
                * 스포일러 방지를 위해 투표 마감 D-1에는
                <br />
                투표수 마지막 자리만 공개됩니다.
              </DeadlineText>
            )}
            <img
              alt="투표관련정보"
              style={{ width: "80%", margin: "3% 10% 3% 10%" }}
              src={Guide}
            />
            <VoteCounter>
              현재 총 투표수 <VoteCount>{totalVoteCount}</VoteCount>
            </VoteCounter>
          </VoteIntro>
        ) : currentTime < LIVEDAY ? (
          <VoteIntro>
            <VoteSubtitle>투표 종료</VoteSubtitle>
            <VoteSubtext>하단에서 각 부분별 후보를 만나보세요!</VoteSubtext>
            <TimeImageBox>
              <img style={{ width: "5rem" }} src={CircleDown} />
            </TimeImageBox>
          </VoteIntro>
        ) : (
          <VoteIntro>
            <VoteSubtitle>투표 결과</VoteSubtitle>
            <VoteSubtext>
              올 한해 우리의 웃음을 책임진 밈을 만나보세요
            </VoteSubtext>
            <TimeImageBox>
              <img style={{ width: "5rem" }} src={CircleDown} />
            </TimeImageBox>
          </VoteIntro>
        )}

        <HorizonalLine />
        {Object.values(descriptions).map((item, idx) => {
          return (
            <div className={"voteBox" + (idx + 1)} key={item.title}>
              <VotePartTitle>{item.title}</VotePartTitle>
              <VotePartSubtitle>
                {item.subtitle1}
                <br />
                {item.subtitle2}
              </VotePartSubtitle>

              <VoteBox>
                {nominationIndex.map((items, idx) => {
                  return (
                    <Nomination
                      value={`${item.part}${idx + 1}`}
                      className={
                        item.part +
                        `${idx + 1}` +
                        (btnActive[item.part] === `${item.part}${idx + 1}`
                          ? " active"
                          : "")
                      }
                      key={item.meme[idx]}
                      onClick={(e) =>
                        setData(item.meme[idx], e, `${item.part}`)
                      }
                    >
                      <img
                        className="meme-image"
                        src={require(`../image/meme/${item.part}${
                          idx + 1
                        }.png`)}
                        onClick={(e) =>
                          setData(item.meme[idx], e, `${item.part}`)
                        }
                      />
                      <div className="meme-info">
                        <div className="meme-name">{item.meme[idx]}</div>
                        <div className="meme-from">{item.from[idx]}</div>
                        <div className="meme-count">
                          {currentTime < BEFORE_DEADLINE
                            ? `${String(
                                new Intl.NumberFormat("en-US").format(
                                  partialVoteCount[item.meme[idx]]?.count
                                )
                              )}표`
                            : currentTime < DEADLINE
                            ? `????${
                                String(
                                  partialVoteCount[item.meme[idx]]?.count
                                )[0]
                              }표`
                            : currentTime < AFTERLIVE
                            ? `????${
                                String(
                                  partialVoteCount[item.meme[idx]]?.count
                                )[0]
                              }표 (투표 종료)`
                            : `${String(
                                new Intl.NumberFormat("en-US").format(
                                  partialVoteCount[item.meme[idx]]?.count
                                )
                              )}표`}
                        </div>
                        <div className="meme-block"></div>
                      </div>
                      <img
                        className="vote-done-image"
                        alt="투표완료"
                        src={Done}
                      />
                    </Nomination>
                  );
                })}
              </VoteBox>
            </div>
          );
        })}
      </VoteContainer>
    </>
  );
}

const VoteContainer = styled.div`
  margin-top: 6rem;

  @media screen and (max-width: 500px) {
    margin-top: 4rem;
  }

  @media screen and (max-width: 380px) {
    margin-top: 2rem;
  }
`;

const VoteIntro = styled.div``;

const VoteCounter = styled.div`
  text-align: center;
  color: #faff00;
  font-family: "SUITM";
  font-size: 2.5rem;
  margin-bottom: 7rem;
`;
const VoteCount = styled.span`
  font-weight: bold;
  font-size: 2.8rem;
`;

const HorizonalLine = styled.hr`
  color: white;
  width: 80%;
  margin: 5rem;
  margin-left: 10%;
`;

const VoteTitle = styled.div`
  text-align: center;
  color: #faff00;
  font-size: 16px;
  font-family: "SUITB";
  letter-spacing: 1px;
  text-shadow: 0 0 #faff00;
`;

const VoteSubtitle = styled.div`
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

const VotePartTitle = styled.div`
  color: white;
  font-size: 3.5rem;
  text-align: left;
  margin-bottom: 1rem;
  margin-left: 7.5%;
  font-family: "SUITM";
  font-weight: bolder;

  @media screen and (max-width: 500px) {
    font-size: 3rem;
  }
`;
const VotePartSubtitle = styled.div`
  text-align: left;
  margin-left: 7.5%;
  font-family: "SUITM";
  font-weight: lighter;
  color: white;
  font-size: 1.7rem;
  @media screen and (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

const VoteBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 90% !important;
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 10rem;
  line-height: 5rem;
`;
const Nomination = styled.div`
  position: relative;
  display: flex;
  width: 95%;
  margin: auto;
  margin-top: 1rem;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  height: 13rem;
  line-height: 7rem;
  cursor: pointer;
  background-color: #1d1d1d;
  transition: 0.1s;
  border-radius: 1rem;
  padding: 0;
  z-index: 99;

  @media screen and (max-width: 500px) {
    height: 11rem;
  }
`;

const DeadlineText = styled.div`
  font-family: "SUITM";
  text-align: center;
  color: #7a7a7a;
  margin: 2rem 0 2rem 0;
  font-size: 1.8rem;
`;

const TimeImageBox = styled.div`
  text-align: center;
  margin-top: 1rem;
`;
const VoteSubtext = styled.div`
  color: #faff00;
  text-align: center;
  font-size: 2.2rem;
  margin: 1rem 0 3rem 0;
  font-family: "SUITM";

  @media screen and (max-width: 500px) {
    font-size: 1.2em;
  }
`;
