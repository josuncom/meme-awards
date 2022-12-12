import React from "react";
import styled from "styled-components";
import "swiper/css";

export default function LastAwards() {
  return (
    <VideoContainer>
      <VideoTitle>2021’S WINNER</VideoTitle>
      <VideoSubtitle>2021 수상자</VideoSubtitle>
      <Video
        type="video/webm"
        src="https://youtube.com/embed/a2OiJx5rZVY"
      ></Video>
    </VideoContainer>
  );
}

const VideoContainer = styled.div`
  padding: 3.5rem 1rem;
  margin-bottom: 5rem;
`;

const VideoTitle = styled.div`
  text-align: center;
  color: #faff00;
  font: "Cabin";
  font-size: 16px;
  font-family: "SUITM";
  letter-spacing: 1px;
  font-weight: bold;
  text-shadow: 0 0 #faff00;
`;
const VideoSubtitle = styled.div`
  text-align: center;
  font-size: 5rem;
  margin: 16px 0 3rem 0;
  font-family: "SUITM";
  color: white;
  font-weight: bold;
  line-height: 6rem;

  @media screen and (max-width: 500px) {
    font-size: 4rem;
  }
`;

const Video = styled.iframe`
  margin: auto;
  border-radius: 1rem;
  margin-bottom: 2rem;
  width: 90%;
  margin-left: 5%;
  height: 250px;

  @media screen and (max-width: 500px) {
    height: 220px;
  }
`;
