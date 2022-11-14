import React, { useState, useEffect } from "react";
import {NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import styled from "styled-components";

export default function Navigation(){
    
    const [isMenuShow, setIsMenuShow] = useState(false);

    const onBtnClick = () => {
    setIsMenuShow(false);
        };

    return(
        <HeaderContainer>
                <HeaderTitle to="HomeContainer" spy={true} smooth={true}>
                    MEME
                </HeaderTitle>
            <HeaderBox>
            <div className= "HeaderMenu">
                <NavBtn to="HomeContainer" className="NavBtn" spy={true} smooth={true}>
                    HOME
                </NavBtn>
                
                <NavBtn to="AboutContainer" className="NavBtn" spy={true} smooth={true}>
                    ABOUT
                </NavBtn>

                <NavBtn to="ProjectContainer" className="NavBtn" spy={true} smooth={true}>
                    PROJECTS
                </NavBtn>

                <NavBtn to="ProfileContainer" className="NavBtn" spy={true} smooth={true}>
                    PROFILE
                </NavBtn>

                <NavBtn to="ConnectContainer" className="NavBtn" spy={true} smooth={true}>
                    CONNECT
                </NavBtn>
            </div>
        </HeaderBox>
        </HeaderContainer>
    )
}


const HeaderTitle = styled(Link)`
    &:hover{
        text-decoration: none;
        color: rgba(117, 114, 114, 0.856);
        transition: 1s;
    };
    margin-top: 3%;
    color: white;
    font-size: 40px;
    animation: rotation linear infinite 3s;
    text-decoration: none;
    padding-left: 2%;
    transition: 1s;
`;

const HeaderContainer = styled.div`
    display: flex;
    background-color: black;
    width: 100%;
    color: white;
    position: fixed;
    z-index: 999;
    opacity: 0.8;
`;

const HeaderBox = styled.div`
    margin-top: 4%;
`;

const NavBtn = styled(Link)`
    &:hover{
        text-decoration: none;
        color: rgba(117, 114, 114, 0.856);
        transition: 1s;
    };
    padding: 15px;
    font-size: 12px;
    color: #ffffff;
    text-decoration: none;
    z-index: 10;
`
