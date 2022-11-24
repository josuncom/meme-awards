import React, {useState, useEffect } from "react";
import '../components/Project.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Project() {
    var Carousel = require('react-responsive-carousel').Carousel;

    const [isProjectBox1Scrolled, setIsProjectBox1Scrolled] = useState(false);
    const [isProjectBox2Scrolled, setIsProjectBox2Scrolled] = useState(false);    
    const [isProjectBox3Scrolled, setIsProjectBox3Scrolled] = useState(false);  // Home의 Top 값

    const projectBox1 = document.getElementsByClassName('ProjectBox1');
    const projectBox2 = document.getElementsByClassName('ProjectBox2');
    const projectBox3 = document.getElementsByClassName('ProjectBox3');

    const [projectBox1FromTop, setProjectBox1FromTop] = useState(8000);
    const [projectBox2FromTop, setProjectBox2FromTop] = useState(10000);
    const [projectBox3FromTop, setProjectBox3FromTop] = useState(12000);

    const showProjectBox = () => {
        if(projectBox1FromTop >= 750){      // 올릴 때 1 사라지게 함
            setIsProjectBox1Scrolled(false);
        }

        if(projectBox1FromTop <= 350){      // 내릴 때, 올릴 때 1 나타나게 함
            setIsProjectBox1Scrolled(true);
            setIsProjectBox2Scrolled(false);
        }   

        if(projectBox2FromTop <= 140){  // 내릴 때 2 나타나고 1 사라짐
            setIsProjectBox2Scrolled(true); 
            setIsProjectBox1Scrolled(false);
        }

        if(projectBox3FromTop <= 250){  // 내릴 때 3 나타나고 2 사라짐
            setIsProjectBox2Scrolled(false); 
            setIsProjectBox3Scrolled(true); 
        }

        if(projectBox3FromTop >= 350){
            setIsProjectBox3Scrolled(false);
        }

        if(projectBox3FromTop <= -1200){    // 내릴 때 3 사라짐
            setIsProjectBox3Scrolled(false);
        }
    }

    const listener = () => {
        if(projectBox1[0])
        {
            setProjectBox1FromTop(projectBox1[0].getBoundingClientRect().top);
        }

        if(projectBox2[0])
        {
            setProjectBox2FromTop(projectBox2[0].getBoundingClientRect().top);
        }

        if(projectBox3[0])
        {
            setProjectBox3FromTop(projectBox3[0].getBoundingClientRect().top);
        }
    }

    

    useEffect(() => {
    window.addEventListener('scroll', listener);
    showProjectBox(projectBox1FromTop);
    showProjectBox(projectBox2FromTop);
    showProjectBox(projectBox3FromTop);
        }
    );

    return(
        <>
            <div className='ProjectContainer'>
                     <div className="ProjectContainerTitle">Projects</div>
                <div className={isProjectBox1Scrolled ? 'ProjectBox1 ProjectBox1Scrolled' : 'ProjectBox1'}>
                    <span className="title1">Project 1 &nbsp; | &nbsp; About Me </span>
                    <hr className="ProjectLine1"/>
                    <p className="ProjectName1">간단한 자기소개 페이지 프로젝트</p>
                    <hr className="ProjectLine1"/>
                    <p className="TechStacks1">H T M L &nbsp;&nbsp;&nbsp;&nbsp; C S S &nbsp;&nbsp;&nbsp;&nbsp; J A V A S C R I P T</p>
                    <hr className="ProjectLine1"/>
                    <p className="ProjectIntro1">
                        웹 개발 공부를 시작한 이후 처음으로 진행한 프로젝트입니다.<br/><br/>
                        전체적인 구조는 HTML을, 디자인은 CSS로 진행했고,<br/><br/>
                        시계, 마우스 커서 효과, 배경 화면 변경 등의 부가 요소는 Vanilla JavaScript로 구현했습니다.
                    </p>
                    <hr className="ProjectLine1"/>
                    <a href="https://github.com/josuncom/blog_project" target="_blank">
                        <button href="">G I T H U B</button>
                    </a>
                    <a href="https://josuncom.github.io/blog_project/mainPage.html" target="_blank">
                        <button className="VisitBtn1">V I S I T</button>
                    </a>
                
            
            <div className="ProjectImg1">
                <Carousel showArrows={true}>
                    <div>
                        <img className="ProjectImg" src={require('./images/Home.JPG').default}></img>
                        <p className="legend">Home</p>
                    </div>
                    <div>
                        <img className="ProjectImg" src={require('./images/1.JPG').default}></img>
                        <p className="legend">Who Am I ?</p>
                    </div>
                    <div>
                        <img className="ProjectImg" src={require('./images/2.JPG').default}></img>
                        <p className="legend">What I Like ?</p>
                    </div>
                    <div>
                        <img className="ProjectImg" src={require('./images/3.JPG').default}></img>
                        <p className="legend">Contact</p>
                    </div>
                </Carousel>
            </div>
            </div>

            <div className={isProjectBox2Scrolled? 'ProjectBox2 ProjectBox2Scrolled' : 'ProjectBox2'}>
                    <span className="title1">Project 2 &nbsp; | &nbsp; Like-Legend </span>
                    <hr className="ProjectLine2"/>
                    <p className="ProjectName1">To-Do Web Application</p>
                    <hr className="ProjectLine2"/>
                    <p className="TechStacks1">J A V A S C R I P T &nbsp;&nbsp;&nbsp;&nbsp; H T M L &nbsp;&nbsp;&nbsp;&nbsp; C S S</p>
                    <hr className="ProjectLine2"/>
                    <p className="ProjectIntro1">
                        프레임워크 / 라이브러리를 사용하지 않고 Vanilla JavaScript로만 진행한 프로젝트입니다.<br/><br/>
                        위대한 농구선수들의 사진과 명언이 랜덤으로 배경 화면이 설정됩니다.<br/><br/>
                        날씨 API를 이용해 현위치와 날씨도 확인할 수 있습니다.<br/><br/>
                        기본적인 JavaScript의 성질을 이해할 수 있었습니다.
                    </p>
                    <hr className="ProjectLine2"/>
                    <a href="https://github.com/josuncom/Like-Legend-main" target="_blank">
                        <button href="">G I T H U B</button>
                    </a>
                    <a href="https://josuncom.github.io/Like-Legend-main/" target="_blank"> 
                        <button className="VisitBtn1">V I S I T</button>
                    </a>
                
            <div className="ProjectImg2">
                <Carousel showArrows={true}>
                    <div>
                        <img className="ProjectImg" src={require('./images/2-1.JPG').default}></img>
                        <p className="legend">초기 화면</p>
                    </div>
                    <div>
                        <img className="ProjectImg" src={require('./images/2-2.JPG').default}></img>
                        <p className="legend">이름, 할 일 정리</p>
                    </div>
                    <div>
                        <img className="ProjectImg" src={require('./images/2-3.JPG').default}></img>
                        <p className="legend">랜덤 배경화면, 명언 구현</p>
                    </div>
                </Carousel>
            </div>
        </div>


            <div className={isProjectBox3Scrolled ? 'ProjectBox3 ProjectBox3Scrolled' : 'ProjectBox3'}>
                    <span className="title1">Project 3 &nbsp; | &nbsp; Iroom-Clone </span>
                    <hr className="ProjectLine1"/>
                    <p className="ProjectName1">Clone Coding using ReactJS</p>
                    <hr className="ProjectLine1"/>
                    <p className="TechStacks1">R e a c t J S &nbsp;&nbsp;&nbsp;&nbsp; F i r e b a s e</p>
                    <hr className="ProjectLine1"/>
                    <p className="ProjectIntro1">
                        FE로는 ReactJS, BE로 Firebase를 이용해 진행한 스터디룸 웹페이지 클론 코딩 프로젝트입니다.<br/><br/>
                        전체적인 구조는 React-Router-Dom을 사용한 Router를 통해 SPA로 구현했고, 회원정보와 예약정보 등은 Firebase에 저장했습니다.<br/><br/>
                        3인 체제의 협업으로 진행했고, Git, Slack으로 소통했습니다.<br/><br/>
                        최신 Reack Hook과 Paging, 반응형 디자인 등을 익힐 수 있었습니다. 
                    </p>
                    <hr className="ProjectLine1"/>
                    <a href="https://github.com/josuncom/iroom-clone-1" target="_blank">
                        <button href="">G I T H U B</button>
                    </a>
                    <a href="https://jseo9732.github.io/iroom-clone/profile" target="_blank"> 
                        <button className="VisitBtn1">V I S I T</button>
                    </a>
                    
            <div className="ProjectImg3">
                <Carousel showArrows={true}>
                    <div>
                        <img className="ProjectImg" src={require('./images/3-1.JPG').default}></img>
                        <p className="legend">홈 페이지</p>
                    </div>
                    <div>
                        <img className="ProjectImg" src={require('./images/3-2.JPG').default}></img>
                        <p className="legend">스터디룸 소개 페이지</p>
                    </div>
                    <div>
                        <img className="ProjectImg" src={require('./images/3-3.JPG').default}></img>
                        <p className="legend">로그인 페이지</p>
                    </div>
                    <div>
                        <img className="ProjectImg" src={require('./images/3-4.JPG').default}></img>
                        <p className="legend">예약 창</p>
                    </div>
                    <div>
                        <img className="ProjectImg" src={require('./images/3-5.JPG').default}></img>
                        <p className="legend">회원 정보 페이지</p>
                    </div>
                </Carousel>
            </div>
        </div>

            </div>

            
        </>
    )
}