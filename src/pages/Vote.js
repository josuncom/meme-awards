import { useEffect, useState, React } from "react";
import '../components/Vote.css';
import { useCookies } from "react-cookie";
import moment from "moment/moment";
import { getFirestore, getDoc, setDoc, doc, updateDoc, increment } from "firebase/firestore";
import styled from "styled-components";

import Guide from '../image/Vote_intro.png';

export default function Vote() {
    const [idolVoted, setIdolVoted] = useState("");
    const [poseVoted, setPoseVoted] = useState("");
    const [canVote, setCanVote] = useState(false);
    const [scrollHeight, setScrollHeight] = useState(0);

    const COOKIE_KEYS = 'isVoted';
    const [cookies, setCookies] = useCookies([COOKIE_KEYS]);

    const descriptions = {
        'TV_OTT' : {
            part : 'TV/OTT',
            title : 'TV/OTT 부문',
            subtitle1 : '올해 방송 및 OTT 부문',
            subtitle2 : '가장 큰 호응을 이끌어낸 인상적인 장면',
            meme : ["우to the 영to the 우!", "내일 봬요 누나", "너 납치 된거야", "어이~ 강프로, 식사는 잡쉈어?"]
        },
        'CONTENT' : {
            part : 'CONTENT',
            title : '영상 콘텐츠 부문',
            subtitle1 : '올해 가장 주목할만한 영상 콘텐츠를',
            subtitle2 : '만들어낸 제작자와 아티스트',
            meme : ["너 뭐 돼?", "재즈가 뭐라고 생각하세요?", "내 장점이 뭔 지 알아?", "하남자 특"]
        },
        'SNS_COMMUNITY' : {
            part : 'SNS_COMMUNITY',
            title : 'SNS/커뮤니티 부문',
            subtitle1 : '올해 SNS와 커뮤니티를',
            subtitle2 : '떠들썩하게 만들었던 바로 그 말',
            meme: ["킹받드라슈", "저는 OO아티스트예요.", "ㄴ겟냐", "그잡채"]
        },
        'MEMEPOSE' : {
            part : 'MEMEPOSE',
            title : '밈포즈 부문',
            subtitle1 : '하나, 둘, 셋 찰칵!',
            subtitle2 : '올해 전국 각지 사진 부스를 뒤덮은 포즈',
            meme : ["갸루피스", "체리피스", "루피피스", "콩수니포즈"]
        },
        'CHALLENGE' : {
            part : 'CHALLENGE',
            title : '챌린지 부문',
            subtitle1 : '올해 뜨거웠던 숏폼 열풍 속',
            subtitle2 : '가장 많은 호응을 받은 댄스 챌린지',
            meme : ["지구방위대", "새삥", "꽃가루", "지글지글"]
        },
        'CHARACTER' : {
            part : 'CHARACTER',
            title : '인간밈화재 부문',
            subtitle1 : '내가 바로 밈의 인간화.',
            subtitle2 : '존재만으로 밈을 만들어내는 인플루언서',
            meme : ["사내뷰공업", "문상훈", "다나카", "신도시부부"]
        },
    }

    

    const memeType = ['TV_OTT', 'CONTENT', 'SNS_COMMUNITY', 'MEMEPOSE', 'CHALLENGE', 'CHARACTER'];
    const nominationIndex = ['1', '2', '3', '4'];

    const [btnActive, setBtnActive] = useState({
        TV_OTT : '',
        CONTENT : '',
        SNS_COMMUNITY : '',
        MEMEPOSE : '',
        CHALLENGE : '',
        CHARACTER : ''
    });

    const toggleActive = (e, part) => {     // 각 후보에 해당하는 DIV toggle용
        if (btnActive[part] == e.target.value){
            setBtnActive({
                ...btnActive,
                [part] : "",
            });
        }else{
        setBtnActive({
            ...btnActive,
            [part]: e.target.value,
        })}
    };
    
    const updateTotalCount = async() =>{            // 총 투표수 업데이트
        const db = getFirestore();
        const entireRef = doc(db, "TOTAL", "COUNT");
        await updateDoc(entireRef, {
            count: increment(1)
        });
    }


    function voteMeme(memeType, targetMeme){      // 투표 반영
        const db = getFirestore();
        const memeRefArray = doc(db, memeType, targetMeme);
        
        memeRefArray.forEach(async memeEle => {
            const memeSnap = await getDoc(memeEle); 
    
            if (memeSnap.exists()) {
                await updateDoc(memeEle, {
                    count: increment(1)
                });
            } else {
                console.log(memeEle);
            try {
                await setDoc(memeEle, {
                    count : 1
                });
                console.log("Document written");
                } catch (e) {
                    console.error("Error adding document: ", e);
                    }
            }
        });
        updateTotalCount();
    }


    const setData = () => {
        const expireDay = moment();
        expireDay.add(10, 'seconds');
        
        if (idolVoted !== "" && poseVoted !== ""){
            if (cookies[COOKIE_KEYS]){
                alert("이미 참여함!");
            } else {
                voteMeme(idolVoted, poseVoted);
                setCookies(COOKIE_KEYS, 'true' , {
                        path: '/',
                        expires: expireDay.toDate(),
                    });
            }
        } else{
            alert('모든 부문에 투표해주세요!');
        } 
    }


    // 각 부문 선택했는지 체크
    const checkVote = (memeName, event, part) => {
        toggleActive(event, part);
        if (sessionStorage.getItem(part) === null){
        sessionStorage.setItem(part, memeName);
      } else{
        console.log('aa');
      }
    }

    // 투표 섹션 들어갔는지 스크롤 높이로 계산해서 판단
    const handleScroll = () => {
        let voteElement = document.querySelector('.HomeContainer');
        let voteButton = document.querySelector('.HomeBoxIntro');
        
        let votestart = voteElement.getBoundingClientRect().top;
        let voteEnd = voteButton.getBoundingClientRect().top - voteElement.getBoundingClientRect().bottom;

        let startScroll = votestart - window.scrollY;
        let endScroll = voteEnd - window.scrollY;

        if(startScroll <= 0 && endScroll >= 150){
            setScrollHeight(1);
        }else{
            setScrollHeight(false);
        } 
        // console.log(scrollHeight);
        // console.log(startScroll, endScroll);
      };


    // 스크롤 높이 변할 때마다 state에 저장
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll); //clean up
        };
      }, [scrollHeight]);

    // 새로고침 할 때마다 세션 스토리지 초기화해서 다시 투표할 수 있게 함
    useEffect(() => {
        window.addEventListener("beforeunload", ()=>{    
            sessionStorage.clear();
        })
    });

    return(
        <>  
        <VoteContainer>
            <VoteIntro>
                <VoteTitle>
                    START VOTING
                </VoteTitle>
                <VoteSubtitle>
                    투표? 가보자고
                </VoteSubtitle>
                <img style={{width:'80%', margin:'10%', marginTop:'5%'}} src={Guide}/>
                <VoteCounter>
                    
                </VoteCounter>
            </VoteIntro>
            <HorizonalLine/>
            {  
                Object.values(descriptions).map((item, idx) => {
                    return(
                    <div key={idx}>
                        <VotePartTitle>
                        {item.title}
                        </VotePartTitle>
                        <VotePartSubtitle>
                        {item.subtitle1}<br/>
                        {item.subtitle2}
                        </VotePartSubtitle>
                        <VoteBox>
                        {nominationIndex.map((items, idx) => {
                            return(
                                <Nomination
                                    value={`${item.part}` + `${idx + 1}`}
                                    className={item.part + (btnActive == (`${item.part}` + `${idx + 1}`) ? " active" : "")}
                                    key={item.title + idx}
                                    onClick={(e) => checkVote(item.meme[idx], e, item.part)}>
                                        {item.meme[idx]}
                                </Nomination>)
                            })}
                        </VoteBox> 
                    </div>
                )})

            }

            <div className="HomeBoxIntro" onClick={() => setData()}>
                {cookies[COOKIE_KEYS] ?                         
                <h1>
                    이미 참여했습니다!
                </h1> : (
                <button>
                    투표하기
                </button>
                )}
            </div>
            {scrollHeight ? ( 
                <div className={canVote ? "footerButton active" : "footerButton inactive" } 
                     onClick={canVote ? () => setData() : null} >
                    투표하기
                </div>
            ) : 
            <div className="footerButton">투표하기
                </div>}
            </VoteContainer>
        </>
    );
}

const VoteContainer = styled.div`
    padding: 7rem 0;
`

const VoteIntro = styled.div`
`

const VoteCounter = styled.div`
`

const HorizonalLine = styled.hr`
    color: white;
    width: 80%;
    margin: 5rem;
    margin-left: 10%;
`

const VoteTitle = styled.div`
    text-align: center;
    color: #FAFF00;
    font: 'Cabin';
    font-size: 2rem;
    font-family: 'Cabin';
    letter-spacing: 1px;
`

const VoteSubtitle = styled.div`
    text-align: center;
    font-size: 5rem;
    margin-top: 1rem;
    font-family: 'Cabin';
    color: white;
    font-weight: bold;
    line-height: 6rem;

    @media screen and (max-width: 500px){
        font-size: 4rem;
    }
`

const VotePartTitle = styled.div`
    color: white;
    font-size: 3.5rem;
    text-align: left;
    margin-bottom: 1rem;
    margin-left: 10%;
    font-family : 'Cabin';
    font-weight: bolder;

    @media screen and (max-width: 500px){
        font-size: 3rem;
    }
`
const VotePartSubtitle = styled.div`
    text-align: left;
    margin-left: 10%;
    font-family : 'Cabin';
    font-weight: lighter;
    color: white;
    font-size: 1.7rem;
    @media screen and (max-width: 500px){
        font-size: 1.5rem;
    }
`

const VoteBox = styled.div`
    display: flex;
    flex-flow : row wrap;
    width: 90% !important;
    margin: auto;
    margin-top: 3rem;
    margin-bottom: 10rem;
    line-height: 5rem;
`
const Nomination = styled.button`
    width: 90%;
    margin:auto;
    margin-top: 1rem;
    color: black;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    height: 7rem;
    line-height: 7rem;
    cursor: pointer;
    background: #ab9831;
    transition: 0.1s;
`