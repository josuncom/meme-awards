import React from "react";
import styled from "styled-components";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function LastAwards() {
  return (
    <VideoContainer>
      <VideoTitle>2021’S WINNER</VideoTitle>
      <VideoSubtitle>2021 수상자</VideoSubtitle>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={15}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        width={290}
        breakpoints={{
          500: {
            width: 400,
            spaceBetween: 10,
          },
        }}
      >
        <SwiperSlide>
          <Video
            type="video/webm"
            src="https://youtube.com/embed/a2OiJx5rZVY"
          ></Video>
        </SwiperSlide>
        <SwiperSlide>
          <Video
            type="video/webm"
            src="https://youtube.com/embed/dB4KmMIUIAw"
          ></Video>
        </SwiperSlide>
      </Swiper>
    </VideoContainer>
  );
}

const VideoContainer = styled.div`
  height: 500px;
  padding: 3.5rem 1rem;
`;

const VideoTitle = styled.div`
  text-align: center;
  color: #faff00;
  font: "Cabin";
  font-size: 2rem;
  font-family: "SUITM";
  letter-spacing: 1px;
  font-weight: bold;
`;
const VideoSubtitle = styled.div`
  text-align: center;
  font-size: 5rem;
  margin: 1rem 0 3rem 0;
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
  width: 400px;
  height: 220px;

  @media screen and (max-width: 500px) {
    width: 290px;
    height: 230px;
  }
`;
