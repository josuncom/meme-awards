const Top2Data = {
  "우 to the 영 to the 우!": "TV_OTT1",
  "내일 봬요 누나": "TV_OTT2",
  "너 납치된 거야": "TV_OTT3",
  "어이, 강프로 식사는 잡쉈어?": "TV_OTT4",
  "너 혹시 뭐 돼?": "CONTENT1",
  "재즈가 뭐라고 생각하세요?": "CONTENT2",
  "내 장점이 뭔지 알아?": "CONTENT3",
  "하남자 특)": "CONTENT4",
  킹받드라슈: "SNS_COMMUNITY1",
  "저는 OO아티스트예요.": "SNS_COMMUNITY2",
  ㄴ겠냐: "SNS_COMMUNITY3",
  "그 잡채": "SNS_COMMUNITY4",
  갸루피스: "MEMEPOSE1",
  체리피스: "MEMEPOSE2",
  루피피스: "MEMEPOSE3",
  콩순이포즈: "MEMEPOSE4",
  "손흥민 마스크짤": "SPORTS1",
  "알빠임?": "SPORTS2",
  "중요한 것은 꺾이지 않는 마음": "SPORTS3",
  곤룡포좌: "SPORTS4",
  사내뷰공업: "CHARACTER1",
  빠더너스: "CHARACTER2",
  다나카: "CHARACTER3",
  "서준 엄마": "CHARACTER4",
};

const descriptions = {
  TV_OTT: {
    part: "TV_OTT",
    title: "TV/OTT 부문",
    subtitle1: "올해 방송 및 OTT 부문에서",
    subtitle2: "가장 큰 호응을 이끌어낸 인상적인 장면",
    meme: [
      "우 to the 영 to the 우!",
      "내일 봬요 누나",
      "너 납치된 거야",
      "어이, 강프로 식사는 잡쉈어?",
    ],
    from: ["이상한 변호사 우영우", "환승연애2", "범죄도시2", "수리남"],
  },
  CONTENT: {
    part: "CONTENT",
    title: "영상 콘텐츠 부문",
    subtitle1: "올해 가장 주목할만한 영상 콘텐츠를",
    subtitle2: "만들어낸 제작자와 아티스트",
    meme: [
      "너 혹시 뭐 돼?",
      "재즈가 뭐라고 생각하세요?",
      "내 장점이 뭔지 알아?",
      "하남자 특)",
    ],
    from: ["레오제이", "주호민", "아이브 가을", "침펄"],
  },
  SNS_COMMUNITY: {
    part: "SNS_COMMUNITY",
    title: "SNS/커뮤니티 부문",
    subtitle1: "올해 SNS와 커뮤니티를",
    subtitle2: "떠들썩하게 만들었던 바로 그 말",
    meme: ["킹받드라슈", "저는 OO아티스트예요.", "ㄴ겠냐", "그 잡채"],
    from: ["미상", "미상", "미상", "미상"],
  },
  MEMEPOSE: {
    part: "MEMEPOSE",
    title: "밈포즈 부문",
    subtitle1: "하나, 둘, 셋 찰칵!",
    subtitle2: "올해 전국 각지 사진 부스를 뒤덮은 포즈",
    meme: ["갸루피스", "체리피스", "루피피스", "콩순이포즈"],
    from: ["아이브 레이", "빌리", "미상", "아이브 레이"],
  },
  SPORTS: {
    part: "SPORTS",
    title: "스포츠 부문",
    subtitle1: "춥지만 마음만은 뜨거웠던 겨울,",
    subtitle2: "모두가 한 마음으로 모이게 한 주역들",
    meme: [
      "손흥민 마스크짤",
      "알빠임?",
      "중요한 것은 꺾이지 않는 마음",
      "곤룡포좌",
    ],
    from: ["손흥민", "미상", "롤드컵", "규태씨"],
  },
  CHARACTER: {
    part: "CHARACTER",
    title: "인간밈화재 부문",
    subtitle1: "내가 바로 밈의 인간화.",
    subtitle2: "존재만으로 밈을 만들어내는 인플루언서",
    meme: ["사내뷰공업", "빠더너스", "다나카", "서준 엄마"],
    from: ["사내뷰공업", "빠더너스", "나몰라 패밀리", "피식대학"],
  },
};

const BEFORE_DEADLINE = new Date("2022-12-17 23:59:59");
const DEADLINE = new Date("2022-12-18 23:59:59");
const LIVEDAY = new Date("2022-12-21 21:00:00");
const AFTERLIVE = new Date("2022-12-21 23:59:59");

export {
  Top2Data,
  descriptions,
  BEFORE_DEADLINE,
  DEADLINE,
  LIVEDAY,
  AFTERLIVE,
};
