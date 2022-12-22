# 2022 밈 어워즈

### 1. 프로젝트 개요
- 2022년 한해동안 유행했던 밈 중 최고의 밈을 선정하는 페이지입니다.
- 배포 링크 : https://www.banggooso.com/ms/meme-awards/2022/
- 개발 기간 : 2022/11/23 - 2022/12/08
<br/><br/><br/>

### 2. 페이지 구성 (`왼쪽 -> 오른쪽, 상단 -> 하단 순서대로`)
<br/>
<p align="center">
  <img src="https://user-images.githubusercontent.com/66259692/207210598-f98ad15b-a153-4379-a1a2-f8b7a195154f.png" width="180" height="400"/>
  <img src="https://user-images.githubusercontent.com/66259692/207210484-b7aa06d7-9326-4c28-8829-32ae92ab1f00.png" width="180" heigth="400"/>
  <img src="https://user-images.githubusercontent.com/66259692/207210733-1883ecfb-22dc-4b7b-8dae-6dd5105e1863.png" width="180" heigth="400"/>
</p>
<p align="center">
  <img src="https://user-images.githubusercontent.com/66259692/207210862-a849c431-46d7-465f-9c91-0617bdb5bd64.png" width="180" heigth="400"/>
  <img src="https://user-images.githubusercontent.com/66259692/207210953-a77850d8-43ad-47dd-9cac-9506f7a89feb.png" width="180" heigth="400"/>
  <img src="https://user-images.githubusercontent.com/66259692/207211077-d14c3710-c438-4046-b78f-309c06a5cbab.png" width="180" heigth="400"/>
</p>
<br/>

1) Intro (`인트로`)
2) Top2, Last Winner (`실시간 1, 2위 및 작년 수상 밈`)
3) Clock (`남은 시간 및 실시간 투표 수`)
4) Vote (`투표 진행`)
5) Link / Footer (`연관 콘텐츠 랜딩 버튼 및 하단 footer`)
6) Share (`하단 고정된 공유하기 버튼`)
<br/><br/><br/>

### 3. 기술 정보
1) 기술 스택
- ReactJS
- Firebase
- styled-component / CSS
<br/><br/><br/>

### 4. 버전 관리 & 리팩토링
1) 12/16 : `feat : alert 2번씩 나오는 현상 해결, 분기별 랜더링 로직 수정`
- 투표 마감 전날(12/20), 라이브 시상식 다음날(12/21 23:59:59 이후) 분기 재설정
- 각 투표란과 이미지에 투표 함수가 걸려 있어서 이벤트 버블링이 발생해 alert이 2번 나오는 현상 해결.
<br/>
2) 12/19 : `fix: 12/19 피드백 반영`
- 갤럭시22 울트라 기종을 비롯한 작은 모바일 기기(max-width : 380px로 설정)에 대한 반응형 디자인 추가.
<br/>
3) 12/21 : `feat : 시간 출력 로직 수정(21시부터 23시 59분 사이)`
- 라이브 시상식(12/21 21시-LIVEDAY)과 라이브 시상식 이후(12/22 00시-AFTERLIVE) 사이의 시간이 음수로 나오는 현상 해결
