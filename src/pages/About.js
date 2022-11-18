import { useEffect, useState, React } from "react";
import '../components/About.css';
import { useCookies } from "react-cookie";
import moment from "moment/moment";
import { getFirestore, getDoc, setDoc, doc, updateDoc, increment } from "firebase/firestore";
import styled from "styled-components";

export default function About() {
    const [idolVoted, setIdolVoted] = useState("");
    const [poseVoted, setPoseVoted] = useState("");

    const COOKIE_KEYS = 'isVoted';
    const [cookies, setCookies] = useCookies([COOKIE_KEYS]);
    
    const idols = ["아이돌1", "아이돌2", "아이돌3", "아이돌4"];
    const poses = ["밈포즈1", "밈포즈2", "밈포즈3", "밈포즈4"];

    const nominationIndex = ['1', '2', '3', '4'];
    const [btnActive, setBtnActive] = useState({
        idol : '',
        pose : '',
    });

    const toggleActive = (e, part) => {     // 각 후보에 해당하는 DIV toggle용
        console.log(e.target.value);
        setBtnActive({
            ...btnActive,
            [part]: e.target.value,
        })
        console.log('btnActive : ' + btnActive[part]);
    };
    
    const updateTotalCount = async() =>{            // 총 투표수 업데이트
        const db = getFirestore();
        const entireRef = doc(db, "TOTAL", "COUNT");
        await updateDoc(entireRef, {
            count: increment(1)
        });
    }

    function voteMeme(idolMeme, poseMeme){      // 투표 반영
        const db = getFirestore();
        const memeRefArray = [doc(db, "IDOL", idolMeme), doc(db, "POSE", poseMeme)];
        
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

    const checkIdolVote = (idolName, event, part) => {
        toggleActive(event, part);
        if (idolVoted === ""){
            setIdolVoted(idolName);
        }else{
            setIdolVoted("");
        }   
    }
    
    const checkPoseVote = (poseName, event, part) => {
        toggleActive(event, part);
        if (poseVoted === ""){
            setPoseVoted(poseName);
        }else{
            setPoseVoted("");
        }   
    }

    // 디버깅용 코드
    // useEffect(() => {
    //     console.log(idolVoted, poseVoted);
    // }, [idolVoted, poseVoted]);


    return(
        <>  
            <VoteTitle>
                아이돌 밈 부문
            </VoteTitle>
            <VoteBox>
            {nominationIndex.map((item, idx) => {
                return(
                <Nomination
                    value={`idol${idx + 1}`}
                    className={"idol" + (btnActive.idol == (`idol${idx + 1}`) ? " active" : "")}
                    key={item}
                    onClick={(e) => checkIdolVote(`idol${idx+1}`, e, 'idol')}>
                        {idols[idx]}
                </Nomination>)
            })}
            </VoteBox>

            <VoteTitle>
                밈 포즈 부문
            </VoteTitle>
            <VoteBox>
            {nominationIndex.map((item, idx) => {
                return(
                <Nomination
                    value={`pose${idx + 1}`}
                    className={"pose" + (btnActive.pose == (`pose${idx + 1}`) ? " active" : "")}
                    key={item}
                    onClick={(e) => checkPoseVote(`pose${idx+1}`, e, 'pose')}>
                        {poses[idx]}
                </Nomination>)
            })}
            </VoteBox>

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
        </>
    );
}

const VoteTitle = styled.div`
    color: white;
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
`
const VoteBox = styled.div`
    display: flex;
    flex-flow : row wrap;
    width: 90% !important;
    margin: auto;
    margin-bottom: 10rem;
    line-height: 5rem;
`
const Nomination = styled.button`
    width: calc(100%/2.2);
    color: black;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    height: 7rem;
    line-height: 7rem;
    margin: 2rem 1rem;
    cursor: pointer;
    background: #ab9831;
    transition: 0.1s;
}
`;