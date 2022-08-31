# ※ wanted-pre-onboarding-fe-Best-Practice


## ★ 프로젝트 실행방법
```
> npm i
> npm run start
```
</br>
</br>

## ★ 프로젝트 설명
- creact-react-app 환경으로 구성하였으며, 라이브러리는 제시한 가이드라인에 맞게 다음과 같이 사용하였습니다.   
  - react-router-dom
  - axios
  - styled-components / styled-reset 
  - eslint-config-prettier (dev)
  - prettier (dev)
  - husky (dev)
- (assignment1 ~ assignment5) 까지 제시한 도전과제를 모두 수행하였으며, 요청에 벗어나지 않도록 최대한 적합하게 구현하였습니다.
- UI는 평가요소가 아니기 때문에 관련 라이브러리를 설치하지않고, 커스텀으로 심플하게 꾸며봤습니다.
- 각 팀원들과 서로 협업하여 개발 할 수 있도록 creact-react-app 환경에 맞춰 eslint, prettier, husky 설정을 하였습니다.
- 팀원의 각 상황을 고려하여 현재는 typescript를 적용하지 않고도 협업에 문제 없을 것 같아 javascript로 진행하였습니다.

</br>
</br>

## ★ 폴더구조 및 설명
```
src
 ┣ components
 ┃ ┣ common // 공용 컴포넌트
 ┃ ┃ ┣ Button.jsx
 ┃ ┃ ┣ Input.jsx
 ┃ ┃ ┗ Layout.jsx
 ┃ ┣ login // 로그인 컴포넌트
 ┃ ┃ ┗ LoginContainer.jsx
 ┃ ┣ register // 회원가입 컴포넌트
 ┃ ┃ ┣ RegisterContainer.jsx
 ┃ ┃ ┗ RegisterForm.jsx
 ┃ ┗ todo // todo 컴포넌트
 ┃ ┃ ┣ ListItemSkeleton.jsx
 ┃ ┃ ┣ TodoContainer.jsx
 ┃ ┃ ┣ TodoList.jsx
 ┃ ┃ ┣ TodoListAdd.jsx
 ┃ ┃ ┣ TodoListHeader.jsx
 ┃ ┃ ┗ TodoListItem.jsx
 ┣ lib
 ┃ ┣ api // api 함수들
 ┃ ┃ ┣ auth.js
 ┃ ┃ ┣ index.js
 ┃ ┃ ┗ todo.js
 ┃ ┗ util // 유틸 함수들
 ┃ ┃ ┣ storage.js
 ┃ ┃ ┗ validation.js
 ┣ pages
 ┃ ┣ Login.jsx
 ┃ ┣ Register.jsx
 ┃ ┗ Todo.jsx
 ┣ style
 ┃ ┣ GlobalStyle.js
 ┃ ┣ animation.js
 ┃ ┗ palette.js
 ┣ App.js
 ┗ index.js
```

</br>
</br>

## ★ 주요 기능별 Best Practice   

</br>

#### 해결 방안 
```
각 팀원들의 수행했던 프로젝트를 서로 보고 리뷰하며 어떻게 Best Practice를 해결할까 논의 한 결과 '이지우' 팀원의 프로젝트가 가장 괜찮다고 의견이 모여 이 프로젝트를 활용해 하나씩 개선하는 방식으로 진행하였습니다.
```
### 1. 사용자 경험 개선을 위한 유효성 검사 이벤트 변경 (# assignment 1)
- 기존 사용자가 입력창에서 아웃포커싱을 하지않으면 유효성검사를 하지 않는 상황  
[이전] -> input에서 onBlur 이벤트로 이메일, 패스워드 유효성 검사 진행   
[개선] -> input에서 onChange 이벤트로 이메일, 패스워드 유효성 검사 진행

### 2. 수정 모드 완료버튼 예외처리 (# assignment 4~5)
- 사용자가 수정모드에서 값을 변경할 때 빈 값으로 변경 할 때의 상황  
[이전] -> 빈값 그대로 api 요청 호출을 하여 예기치 못한 에러 발생   
[개선] -> 수정 모드의 완료 버튼을 상황에 맞게 disabled 처리

### 3. 로컬 스토리지 함수 모듈화 (# 기타)
- 서비스 규모가 커짐에 따라 인증, 인가를 할 경우가 많아지는 상황   
[이전] -> 인증 및 인가가 필요한 API와 페이지 마다 localStorage와 token 관련 코드 작성     
[개선] -> util 폴더의 storage.js로 모듈화. 코드 작성자는 이후 분리된 로컬스토리지 함수를 바탕으로 높아진 재사용성과 함께 코드 확장이 가능


</br>
</br>

## ★ 데모영상
https://www.youtube.com/watch?v=b-XbsYZ6Hn0
