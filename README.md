# ※ wanted-pre-onboarding-fe-Best-Pratice

- 8팀 팀원: 이지우, 배범수, 신승준, 박세진, 장현성, 김기범, 최재혁

<br />

### ★ 폴더구조

-

```
src
 ┣ components
 ┃ ┣ common
 ┃ ┃ ┣ Button.jsx
 ┃ ┃ ┣ Input.jsx
 ┃ ┃ ┗ Layout.jsx
 ┃ ┣ login
 ┃ ┃ ┗ LoginContainer.jsx
 ┃ ┣ register
 ┃ ┃ ┣ RegisterContainer.jsx
 ┃ ┃ ┗ RegisterForm.jsx
 ┃ ┗ todo
 ┃ ┃ ┣ ListItemSkeleton.jsx
 ┃ ┃ ┣ TodoContainer.jsx
 ┃ ┃ ┣ TodoList.jsx
 ┃ ┃ ┣ TodoListAdd.jsx
 ┃ ┃ ┣ TodoListHeader.jsx
 ┃ ┃ ┗ TodoListItem.jsx
 ┣ lib
 ┃ ┣ api
 ┃ ┃ ┣ auth.js
 ┃ ┃ ┣ index.js
 ┃ ┃ ┗ todo.js
 ┃ ┗ util
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

### ★ 기술 스택

- JavaScript
- React
- Styled-Components

### ★ 주요 기능별 Best Practice

## 1. Assignment1

- 이메일과 비밀번호의 유효성 검사기능

## 2. Assignment2

- 로그인 API를 호출
- 응답받은 JWT는 로컬 스토리지에 저장

## 3. Assignment3

- 로컬 스토리지에 토큰이 있는 상태로 / 페이지에 접속한다면 /todo 경로로 리다이렉트
- 로컬 스토리지에 토큰이 없는 상태로 /todo페이지에 접속한다면 / 경로로 리다이렉트

## 4. Assignment4

- /todo경로에 접속하면 투두 리스트의 목록을 출력
- 리스트 페이지에는 입력창과 추가 버튼이 있고, 추가 버튼을 누르면 입력창의 내용이 새로운 투두 리스트로 추가

## 5. Assignment5

- 투두 리스트의 수정, 삭제 기능을 구현
- 투두 리스트의 개별 아이템 우측에 수정버튼이 존재하고 해당 버튼을 누르면 수정모드가 활성화되고 투두 리스트의 내용을 수정 가능하게 변경
- 수정모드에서는 개별 아이템의 우측에 제출버튼과 취소버튼이 표시되며 해당 버튼을 통해서 수정 내용을 제출하거나 수정을 취소할 수 있도록 구현
- 투두 리스트의 개별 아이템 우측에 삭제버튼이 존재하고 해당 버튼을 누르면 해당 투두를 삭제
