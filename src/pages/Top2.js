import React from 'react';
import { getFirestore, getDoc, setDoc, doc, updateDoc, increment } from "firebase/firestore";
import styled from 'styled-components';

export default function Top2(){
    return (
        <Top2Container>
            <Top2Title>
                MEME of the year
            </Top2Title>
            <Top2Subtitle>
            실시간 올해의 밈
            </Top2Subtitle>
        </Top2Container>
    )
}

const Top2Container = styled.div`
    height: 500px;
    padding: 6.5rem 3rem;
`

const Top2Title = styled.div`
    text-align: center;
    color: #FAFF00;
    font: 'Cabin';
    font-size: 2rem;
    font-family: 'Cabin';
    letter-spacing: 1px;
`
const Top2Subtitle = styled.div`
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