import { React, useState, useEffect } from "react";

export const KakaoShare = (route, title) => {
  // url이 id값에 따라 변경되기 때문에 route를 인자값으로 받아줌
  if (window.Kakao) {
    const kakao = window.Kakao;

    kakao.Link.sendDefault({
      objectType: "feed", // 카카오 링크 공유 여러 type들 중 feed라는 타입 -> 자세한 건 카카오에서 확인
      content: {
        title: title, // 인자값으로 받은 title
        description: "대국민 밈 연말정산, 올해의 밈을 뽑아주세요!", // 인자값으로 받은 title
        imageUrl:
          "https://cdn.banggooso.com/assets/images/game147/result/B.png",
        link: {
          mobileWebUrl: route, // 인자값으로 받은 route(uri 형태)
          webUrl: route,
        },
      },
      buttons: [
        {
          title: "title",
          link: {
            mobileWebUrl: route,
            webUrl: route,
          },
        },
      ],
    });
  }
};

export const shareTwitter = (url) => {
  const text = "2022년을 뒤흔든 최고의 밈을 뽑아주세요!";
  window.open("https://twitter.com/intent/tweet?text=" + text + "&url=" + url);
};
