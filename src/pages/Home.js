import React, {useEffect, useState } from "react";
import '../components/Home.css';
import { getData, setData } from "../Api";
import { useCookies } from "react-cookie";
import moment from "moment/moment";

export default function Home() {
    const [isHomeContainerScrolled, setIsHomeContainersScrolled] = useState(false);    // Home의 Top 값
    const homeContainer = document.getElementsByClassName('HomeContainer');
    const [homeContainerFromTop, setHomeContainerFromTop] = useState(0);
    const COOKIE_KEYS = 'isVoted';
    const [cookies, setCookies] = useCookies([COOKIE_KEYS]);

    const showHomeContainer = () => {
        if(homeContainerFromTop <= 100){
            setIsHomeContainersScrolled(true);
        }
    }

    const listener = () => {
        if(homeContainer[0])
        {
            setHomeContainerFromTop(homeContainer[0].getBoundingClientRect().top);
        }
    }

    useEffect(() => {
            window.addEventListener('scroll', listener);
            showHomeContainer(homeContainerFromTop);
        }
    );

    const setData = () => {
        const expireDay = moment();
        expireDay.add(5, 'seconds');
        
        setCookies(COOKIE_KEYS, 'true' , {
            path: '/',
            expires: expireDay.toDate(),
        });
    }

    return(
        <>
            <div className={isHomeContainerScrolled ? 'HomeContainer HomeContainerScrolled' : 'HomeContainer'}>
                <div className="HomeBox">
                    <div className="HomeBoxIntro" onClick={() => setData()}>
                        {cookies[COOKIE_KEYS] ?                         
                        <h1 onClick={() => alert("이미 참여함!")}>
                            투표하기 버튼
                        </h1> : (
                        <h1>
                            투표하기 버튼
                        </h1>
                        )}<br/>
                        <p>Junior Web FrontEnd Developer</p><br/>
                        <hr className="HomeLine"/>
                    </div>
                    <div className="HomeBoxQuote">
                        The most beautiful thing in the world is,<br/><br/> of course,<br/><br/>the world itself.
                    </div>

                    <div className="HomeLink">
                        <a className="gitLink" href="https://github.com/josuncom" target="_blank">G I T H U B</a>
                        <span> | </span>
                        <a className="blogLink" href="https://velog.io/@josuncom" target="_blank">B L O G</a>
                    </div>
                </div>
            </div>
        </>
    )
}