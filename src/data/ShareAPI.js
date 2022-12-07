export const shareKakao = (route, title) => { // url이 id값에 따라 변경되기 때문에 route를 인자값으로 받아줌
    window.Kakao.init(process.env.REACT_APP_SHARE_KAKAO_LINK_KEY);
    window.Kakao.isInitialized(); // init되면 true, 아니면 false를 반환한다

    console.log(window.Kakao);
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_SHARE_KAKAO_LINK_KEY); // 카카오에서 제공받은 javascript key를 넣어줌 -> .env파일에서 호출시킴
      }
  
      kakao.Link.sendDefault({
        objectType: "feed", // 카카오 링크 공유 여러 type들 중 feed라는 타입 -> 자세한 건 카카오에서 확인
        content: {
          title: title, // 인자값으로 받은 title
          description: "설명", // 인자값으로 받은 title
          imageUrl: "이미지 url",
          link: {
            mobileWebUrl: route, // 인자값으로 받은 route(uri 형태)
            webUrl: route
          }
        },
        buttons: [
          {
            title: "title",
            link: {
              mobileWebUrl: route,
              webUrl: route
            }
          }
        ]
      });
    }
  };

export const shareTwitter = (url) => {
    const text = '2022년을 뒤흔든 최고의 밈을 뽑아주세요!'
    window.open("https://twitter.com/intent/tweet?text=" + text + "&url=" +  url)
}
