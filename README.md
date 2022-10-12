# 원티드 프리온보딩 프론트앤드 선발과제

## 프로젝트의 환경 설정 및 실행 방법

### node 버전 설정

> node version  
> v16.14.2

nvm을 사용중이라면 터미널에서 다음과 같이 입력하시기 바랍니다.

```shell
$ nvm install

또는

$ nvm use
```

nvm을 사용중이 아니라면 node v16.14.2의 설치와 사용이 필요합니다.

### 프로젝트 패키지 설치

노드 버전 설정이 끝났다면 프로젝트 패키지를 설치할 때 아래의 명령어로 패키지를 설치하시기 바랍니다.

```shell
$ npm install
```

### 프로젝트 실행

```shell
$ npm start
```

### API서버를 로컬에서 사용할 경우

만약 프로젝트의 API 서버를 로컬에서 실행해야할 경우 [src/lib/Immutable/Immutable.ts](./src/lib/Immutable/Immutable.ts) 파일의 BASE_URL 변수에 로컬 서버의 url을 string으로 입력해주시기 바랍니다.

```ts
export const BASE_URL = your_url;
```

## 데모

프로젝트 데모는 아래 링크에서 직접 실행해볼 수 있습니다.

[어플리케이션 링크](https://mellow-fox-0d0e62.netlify.app/)

## 과제 조건

1. Assignment1

   - [x] 이메일과 비밀번호의 유효성 검사기능을 구현해주세요
     - [x] 이메일 조건: @ 포함
     - [x] 비밀번호 조건: 8자 이상 입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼이 활성화 되도록 해주세요

2. Assignment2

   - [x] 로그인 API를 호출하고, 올바른 응답을 받았을 때 /todo 경로로 이동해주세요
   - [x] 응답받은 JWT는 로컬 스토리지에 저장해주세요

3. Assignment3

   - [x] 로그인 여부에 따른 리다이렉트 처리를 구현해주세요
   - [x] 로컬 스토리지에 토큰이 있는 상태로 / 페이지에 접속한다면 /todo 경로로 리다이렉트 시켜주세요
   - [x] 로컬 스토리지에 토큰이 없는 상태로 /todo페이지에 접속한다면 / 경로로 리다이렉트 시켜주세요

4. Assignment4

   - [x] /todo경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
   - [x] 리스트 페이지에는 투두 리스트의 내용과 완료 여부가 표시되어야 합니다.
   - [x] 리스트 페이지에는 입력창과 추가 버튼이 있고, 추가 버튼을 누르면 입력창의 내용이 새로운 투두 리스트로 추가되도록 해주세요

5. Assignment5

   - [x] 투두 리스트의 수정, 삭제 기능을 구현해주세요
   - [x] 투두 리스트의 개별 아이템 우측에 수정버튼이 존재하고 해당 버튼을 누르면 수정모드가 활성화되고 투두 리스트의 내용을 수정할 수 있도록 해주세요
   - [x] 수정모드에서는 개별 아이템의 우측에 제출버튼과 취소버튼이 표시되며 해당 버튼을 통해서 수정 내용을 제출하거나 수정을 취소할 수 있도록 해주세요
   - [x] 투두 리스트의 개별 아이템 우측에 삭제버튼이 존재하고 해당 버튼을 누르면 투두 리스트가 삭제되도록 해주세요

## 라이브러리

- **axios**
  - 서버와 통신을 위해서 설치하여 사용했습니다.
  - fetch API보다 에러 처리가 더 쉽습니다.
- **react-router-dom**
- **styled-components**
- **styled-reset**
- **react-app-rewired**
- **customize-cra**

## 폴더 구조

전체 폴더 구조.

```
src
├── Components
│   ├── Button
│   ├── Form
│   ├── Layout
├── Pages
│   ├── Auth
│   │   └── hooks
│   ├── Todo
│   │   └── hooks
├── Routes
├── lib
│   ├── Immutable
│   ├── api
│   ├── hooks
│   ├── state
│   └── styles
```

### hooks 폴더를 lib와 각 컴포넌트 hooks로 나눈 이유

기능의 연관성이 높은 파일끼리 서로 묶기 위해서 hooks 폴더를 lib와 각 컴포넌트 안에 hooks 폴더로 나누었습니다.

lib 폴더 안에 있는 hooks 폴더는 전역으로 사용되는 커스텀 훅이 보관되어있습니다. Pages 안에 각 페이지 폴더에 hooks는 Pages와 연관이 있는 hooks입니다.

### Pages와 Components 폴더의 차이

Pages는 페이지에 관련된 기능과 UI를 담기 위한 폴더입니다.
Components는 전역으로 공유되는 UI 컴포넌트를 담기 위한 폴더입니다.

## 과제를 수행하면서 해결하려고 했던 문제들

### 전역 Context API를 사용하여 서버 상태 관리하기
