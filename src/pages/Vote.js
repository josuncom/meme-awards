import { useEffect, useState, useRef, React } from "react";
import "../components/Vote.css";
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

  const voteBoxRef = useRef([]);
  const descriptions = {
    TV_OTT: {
      part: "TV_OTT",
      title: "TV/OTT 부문",
      subtitle1: "올해 방송 및 OTT 부문",
      subtitle2: "가장 큰 호응을 이끌어낸 인상적인 장면",
      meme: [
        "우to the 영to the 우!",
        "내일 봬요 누나",
        "너 납치 된거야",
        "어이~ 강프로, 식사는 잡쉈어?",
      ],
    },
    CONTENT: {
      part: "CONTENT",
      title: "영상 콘텐츠 부문",
      subtitle1: "올해 가장 주목할만한 영상 콘텐츠를",
      subtitle2: "만들어낸 제작자와 아티스트",
      meme: [
        "너 뭐 돼?",
        "재즈가 뭐라고 생각하세요?",
        "내 장점이 뭔 지 알아?",
        "하남자 특",
      ],
    },
    SNS_COMMUNITY: {
      part: "SNS_COMMUNITY",
      title: "SNS/커뮤니티 부문",
      subtitle1: "올해 SNS와 커뮤니티를",
      subtitle2: "떠들썩하게 만들었던 바로 그 말",
      meme: ["킹받드라슈", "저는 OO아티스트예요.", "ㄴ겟냐", "그잡채"],
    },
    MEMEPOSE: {
      part: "MEMEPOSE",
      title: "밈포즈 부문",
      subtitle1: "하나, 둘, 셋 찰칵!",
      subtitle2: "올해 전국 각지 사진 부스를 뒤덮은 포즈",
      meme: ["갸루피스", "체리피스", "루피피스", "콩수니포즈"],
    },
    CHALLENGE: {
      part: "CHALLENGE",
      title: "챌린지 부문",
      subtitle1: "올해 뜨거웠던 숏폼 열풍 속",
      subtitle2: "가장 많은 호응을 받은 댄스 챌린지",
      meme: ["지구방위대", "새삥", "꽃가루", "지글지글"],
    },
    CHARACTER: {
      part: "CHARACTER",
      title: "인간밈화재 부문",
      subtitle1: "내가 바로 밈의 인간화.",
      subtitle2: "존재만으로 밈을 만들어내는 인플루언서",
      meme: ["사내뷰공업", "문상훈", "다나카", "신도시부부"],
    },
  };

  const nominationIndex = ["1", "2", "3", "4"];

  const [btnActive, setBtnActive] = useState({
    TV_OTT: "",
    CONTENT: "",
    SNS_COMMUNITY: "",
    MEMEPOSE: "",
    CHALLENGE: "",
    CHARACTER: "",
  });

  const toggleActive = (e, part) => {
    // 각 후보에 해당하는 DIV toggle용
    if (btnActive[part] === "") {
      setBtnActive({
        ...btnActive,
        [part]: e.target.parentNode.parentNode.getAttribute("value"),
      });
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
    // 세션 스토리지 체크 후 아직 투표하지 않은 부문이면 투표 반영
    toggleActive(event, part);
    if (sessionStorage.getItem(part) === null) {
      sessionStorage.setItem(part, memeName);
      voteMeme(part, memeName);
    } else {
      alert("이미 해당 부문에 투표했습니다!");
    }
  };

  // 투표 시 시간차를 두고 다음 부문으로 스크롤
  const handleScroll = (destination, item) => {
    let voteBox1 = document.querySelector(".voteBox1");
    let voteBox2 = document.querySelector(".voteBox2");
    let voteBox3 = document.querySelector(".voteBox3");
    let voteBox4 = document.querySelector(".voteBox4");
    let voteBox5 = document.querySelector(".voteBox5");
    let voteBox6 = document.querySelector(".voteBox6");

    let voteBoxPosition = [
      voteBox1.offsetTop,
      voteBox2.offsetTop,
      voteBox3.offsetTop,
      voteBox4.offsetTop,
      voteBox5.offsetTop,
      voteBox6.offsetTop,
    ];

    if (
      destination.idx < 5 &&
      sessionStorage.getItem(destination.item.part) != null
    ) {
      setTimeout(() => {
        window.scrollTo(
          voteBoxPosition[destination.idx + 1] - 100,
          voteBoxPosition[destination.idx + 1] - 100
        );
      }, 500);
    } else if (
      destination.idx === 5 &&
      sessionStorage.getItem(destination.item.part) != null
    ) {
      window.scrollTo(
        voteBoxPosition[destination.idx] + 700,
        voteBoxPosition[destination.idx] + 700
      );
    }
  };

  // 새로고침 할 때마다 세션 스토리지 초기화해서 다시 투표할 수 있게 함
  window.addEventListener("beforeunload", () => {
    sessionStorage.clear();
  });

  useEffect(() => {
    getTotalVoteCount().then((voteCount) => {
      setTotalVoteCount(voteCount);
    });
  }, []);

  useEffect(() => {
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
        <VoteIntro>
          <VoteTitle>START VOTING</VoteTitle>
          <VoteSubtitle>투표? 가보자고</VoteSubtitle>
          <img
            alt="투표관련정보"
            style={{ width: "80%", margin: "5% 10% 3% 10%" }}
            src={Guide}
          />
          <VoteCounter>
            현재 총 투표수 <VoteCount>{totalVoteCount}</VoteCount>
          </VoteCounter>
        </VoteIntro>
        <HorizonalLine />
        {Object.values(descriptions).map((item, idx) => {
          return (
            <div
              className={"voteBox" + (idx + 1)}
              key={idx}
              ref={voteBoxRef[idx]}
              onClick={() => handleScroll({ idx, item })}
            >
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
                      key={item.title + idx}
                      onClick={(e) =>
                        setData(item.meme[idx], e, `${item.part}`)
                      }
                    >
                      <img
                        className="meme-image"
                        src={require(`../image/${item.part}${idx + 1}.png`)}
                      />
                      <div className="meme-info">
                        <div className="meme-name">{item.meme[idx]}</div>
                        <div className="meme-count">
                          {JSON.stringify(
                            partialVoteCount[item.meme[idx]]?.count
                          )}
                          표
                        </div>
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
  margin-top: 7rem;
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
  font-size: 2rem;
  font-family: "SUITM";
  letter-spacing: 1px;
  font-weight: bold;
`;

const VoteSubtitle = styled.div`
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

const VotePartTitle = styled.div`
  color: white;
  font-size: 3.5rem;
  text-align: left;
  margin-bottom: 1rem;
  margin-left: 10%;
  font-family: "SUITM";
  font-weight: bolder;

  @media screen and (max-width: 500px) {
    font-size: 3rem;
  }
`;
const VotePartSubtitle = styled.div`
  text-align: left;
  margin-left: 10%;
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
  display: flex;
  width: 90%;
  margin: auto;
  margin-top: 1rem;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  height: 12rem;
  line-height: 7rem;
  cursor: pointer;
  background-color: #1d1d1d;
  transition: 0.1s;
  border-radius: 1rem;
  padding: 0;
  z-index: 99;

  @media screen and (max-width: 500px) {
    height: 10rem;
  }
`;
