import { useEffect, useState, React } from "react";
import '../components/About.css';
import ReactTypingEffect from 'react-typing-effect';
import { useCookies } from "react-cookie";
import moment from "moment/moment";
import { getFirestore, getDoc, setDoc, doc, updateDoc, increment } from "firebase/firestore";


export default function About() {
    const [idolVoted, setIdolVoted] = useState("");
    const [poseVoted, setPoseVoted] = useState("");
    const [isvoted, setIsVoted] = useState(false);

    const COOKIE_KEYS = 'isVoted';
    const [cookies, setCookies] = useCookies([COOKIE_KEYS]);

    function voteMeme(idolMeme, poseMeme){
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
        
    }

    const setData = () => {
        console.log(idolVoted, poseVoted);
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

    const checkIdolVote = (idolName) => {
        if (idolVoted === ""){
            setIdolVoted(idolName);
        }else{
            setIdolVoted("");
        }   
    }
    
    const checkPoseVote = (poseName) => {
        if (poseVoted === ""){
            setPoseVoted(poseName);
        }else{
            setPoseVoted("");
        }   
    }

    useEffect(() => {
        console.log(idolVoted, poseVoted);
    }, [idolVoted, poseVoted]);


    return(
        <>
            <div className="idol-nomination">
                <div className="idol1" onClick={() => checkIdolVote('idol1')}>
                    아이돌1
                </div> 
                <div className="idol1" onClick={() => checkIdolVote('idol2')}>
                    아이돌2
                </div>
                <div className="idol1" onClick={() => checkIdolVote('idol3')}>
                    아이돌3
                </div>
                <div className="idol1" onClick={() => checkIdolVote('idol4')}>
                    아이돌4
                </div>   
            </div>
            <div className="pose-nomination">
                <div className="pose1" onClick={() => checkPoseVote('pose1')}>
                    밈포즈1
                </div> 
                <div className="pose1" onClick={() => checkPoseVote('pose2')}>
                    밈포즈2
                </div>
                <div className="pose1" onClick={() => checkPoseVote('pose3')}>
                    밈포즈3
                </div>
                <div className="pose1" onClick={() => checkPoseVote('pose4')}>
                    밈포즈4
                </div>   
            </div>

            <div className="HomeBoxIntro" onClick={() => setData()}>
                {cookies[COOKIE_KEYS] ?                         
                <h1>
                    이미 참여했습니다!
                </h1> : (
                <h1>
                    투표하기
                </h1>
                )}
            </div>
            <div className="AboutContainer">
            <div className="AboutContainerTitle">너 때문에 밈치겠어</div>
                <div className="AboutBox">
                <div className="WhoAmI">
                    <ReactTypingEffect speed="100" typingDelay="1000" eraseSpeed="100" eraseDelay="9000" 
                    text={["2022 밈어워즈 가보자고"]}/><br/><br/>
                    <ReactTypingEffect speed="100" typingDelay="1000" eraseSpeed="100" eraseDelay="9000" 
                    text={["밈어워즈 밈어워즈 밈어워즈"]}/><br/><br/>
                </div> 
                </div>
            </div>
        </>
    );
}
