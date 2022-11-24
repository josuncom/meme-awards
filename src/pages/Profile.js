import React, {useEffect, useState } from "react";
import '../components/Profile.css';
import ReactTypingEffect from 'react-typing-effect';

export default function Profile() {
    const [isProfileContainerScrolled, setIsProfileContainerScrolled] = useState(false);
    const profileContainer = document.getElementsByClassName('ProfileContainer');
    const [ProfileContainerFromTop, setProfileContainerFromTop] = useState(5000);

    const showProfileContainer = () =>{
        if(ProfileContainerFromTop <= 500)
        setIsProfileContainerScrolled(true);

        if(ProfileContainerFromTop <= -500 || ProfileContainerFromTop >= 700){
            setIsProfileContainerScrolled(false);
        }
    }

    const listener = () =>{
        if(profileContainer[0])
        {
            setProfileContainerFromTop(profileContainer[0].getBoundingClientRect().top);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listener);
        showProfileContainer(ProfileContainerFromTop);
    });

    

    return(
        <>
            <div className={isProfileContainerScrolled ? 'ProfileContainer ProfileContainerScrolled' : 'ProfileContainer'}>
                <div className="ProfileTitle">Profile</div>
                    <div className='ProfileBox'>
                        <div className="ProfileImage">
                            <img src={require('./images/조은.jpg').default}/>
                        </div>
                    <div className="ProfileContents">
                        <div className="Quote">
                            '어제보다 나은 내가 되자.'
                        </div>
                        <div className="Contents">
                            <span>하루를 살아가는 저의 마음가짐입니다.</span><br/>
                            <span>빠르게 변하는 세상을 살아가다보면,</span><br/>
                            <span>그에 비해 정적인 자신의 모습을 보고 불안해할 때가 있습니다.</span><br/><br/>
                            <span>하지만 거창한 계획이 아니어도,<br/></span>
                            <span>어제의 나보다 발전하는 것을 하루의 목표로 삼는다면,</span><br/>
                            <span>어느 분야에서든지 경쟁력을 갖출 수 있습니다.</span><br/><br/>
                            <span>저는 매일 성장하는 개발자가 되고 싶습니다.</span><br/>
                            <span>오늘도 어제의 나보다 발전하기 위해 노력하겠습니다.</span>
                        </div>
                    </div>
                    </div>
                    <div className="ProfileSkills">
                        <div className="SkillTitle">Skills<hr/></div>
                        <div className="SkillBox">
                            <div className="Skill">
                                <ReactTypingEffect speed="100" typingDelay="1000" eraseSpeed="100" eraseDelay="9000" 
                                text={["H T M L"]}/>
                            </div>
                            <div className="Skill">
                                <ReactTypingEffect speed="100" typingDelay="1000" eraseSpeed="100" eraseDelay="9000" 
                                text={["C S S"]}/>
                            </div>
                            <div className="Skill">
                                <ReactTypingEffect speed="100" typingDelay="1000" eraseSpeed="100" eraseDelay="9000" 
                                text={["J A V A S C R I P T"]}/>
                            </div>
                            <div className="Skill">
                                <ReactTypingEffect speed="100" typingDelay="1000" eraseSpeed="100" eraseDelay="9000" 
                                text={["R E A C T J S"]}/>
                            </div>
                            <div className="Skill">
                                <ReactTypingEffect speed="100" typingDelay="1000" eraseSpeed="100" eraseDelay="9000" 
                             text={["T Y P E S C R I P T"]}/>
                            </div>
                        </div>
                    </div>
            </div>    
               
        </>
    )
}