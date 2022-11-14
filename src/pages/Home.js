import React, {useEffect, useState } from "react";
import '../components/Home.css';
import styled from "styled-components";

export default function Home() {
    const [isHomeContainerScrolled, setIsHomeContainersScrolled] = useState(false);    // Home의 Top 값
    const homeContainer = document.getElementsByClassName('HomeContainer');
    const [homeContainerFromTop, setHomeContainerFromTop] = useState(0);

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


    return(
        <>
        <BannerImg src="https://www.banggooso.com/ms/meme-awards/main-logo.png"/>
            <div className={isHomeContainerScrolled ? 'HomeContainer HomeContainerScrolled' : 'HomeContainer'}>
            </div>
        </>
    )
}

const BannerImg = styled.img`
    width:60%;
    margin-left: 20%;
    margin-top: 15rem;
`