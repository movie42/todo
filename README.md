# 원티드 프리온보딩 프론트앤드 선발과제

## 자기소개

안녕하세요. 저는 프론트앤드 개발자 고현수입니다.

- 해당 프로젝트에 대한 질문은 해당 프로젝트의 Issue란에 등록해주세요.
- 채용에 관련된 연락은 이메일로 해주시면 감사드리겠습니다.
- 블로그를 운영하고 있습니다. 개발을 하면서 얻은 지식들을 적어보았습니다. 도움이 되는 글이 있으면 좋겠습니다 .혹시 내용이 틀렸다면 알려주시면 수정하겠습니다.

> My Info
>
> - E-mail : <a href="mailto:movie3342@gmail.com" >movie3342@gmail.com</a>
> - blog : [https://movie42.github.io](https://movie42.github.io)
> - github : [https://www.github.com/movie42](https://www.github.com/movie42)

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

만약 프로젝트의 API 서버를 로컬에서 실행해야할 경우 [src/lib/constants/constants.ts](./src/lib/constants/constants.ts) 파일의 BASE_URL 변수에 로컬 서버의 url을 string으로 입력해주시기 바랍니다.

```ts
export const BASE_URL = "your_url";
```

## 데모

프로젝트 데모는 아래 링크에서 직접 실행해볼 수 있습니다.

[어플리케이션 링크](https://mellow-fox-0d0e62.netlify.app/)

## 라이브러리

- **axios**
  - 서버와 통신을 위해서 설치하여 사용했습니다. 에러처리를 조금 더 쉽게 할 수 있는 장점, API 인스턴스를 조금더 편리하게 만들 수 있었습니다.
- **react-router-dom**
  - 리엑트 라우팅을 하기 위해 설치했습니다.
- **styled-components**
  - JS 스타일링을 하기 위해서 설치했습니다.
- **styled-reset**
  - CSS 리셋을 위한 패키지 입니다.
- **react-app-rewired**
  - 절대 경로를 설정하는데 도움이 되는 패키지라고 생각해서 설치했습니다.
- **customize-cra**
  - 리액트 CRA 환경에서 웹펙을 커스텀하기 위해서 설치했습니다.

## 폴더 구조

전체 폴더 구조.

```
├── public
├── src
│   ├── Components
│   │   ├── Button
│   │   ├── Form
│   │   ├── Layout
│   ├── Pages
│   │   ├── Auth
│   │   │   └── hooks
│   │   ├── Todo
│   │   │   └── hooks
│   ├── Routes
│   ├── Service
│   ├── lib
│   │   ├── api
│   │   ├── constants
│   │   ├── hooks
│   │   ├── repository
│   │   ├── state
└── └── └── styles

```

### 폴더 구조에 대한 이야기

폴더 구조는 여러번 시도를 계속 하고 있습니다. 아직 어떤 폴더 구조가 정확히 이 프로젝트에 맞는지는 잘 모르겠습니다. 하지만 이번 프로젝트에 원칙으로 삼은 것은 관련도가 높은 것끼리 서로 묶자는 것이었습니다.

### hooks 폴더를 lib와 각 컴포넌트 hooks로 나눈 이유

기능의 연관성이 높은 파일끼리 서로 묶기 위해서 hooks 폴더를 lib와 각 컴포넌트 안에 hooks 폴더로 나누었습니다.
lib 폴더 안에 있는 hooks 폴더는 전역으로 사용되는 커스텀 훅이 보관되어있습니다. Pages 안에 각 페이지 폴더에 hooks는 Pages와 연관이 있는 hooks입니다.

### Pages와 Components 폴더의 차이

Pages는 페이지에 관련된 기능과 UI를 담기 위한 폴더입니다.
Components는 전역으로 공유되는 UI 컴포넌트를 담기 위한 폴더입니다.

개인적으로는 이렇게 폴더구조를 하는 것이 UI를 관리하는데 조금 더 이점이 있다고 생각하고 있습니다.

## 고민했던 문제

### 전역 Context API를 사용하여 서버 상태 관리하기

저는 상태를 관리할 때, Tanstack-Query를 자주 사용했습니다. 하지만 이번 과제에서는 Tanstack-Query 라이브러리를 사용 할 수 없었습니다. 그렇기 때문에 처음에는 커스텀 훅을 \*Container.tsx라는 부모 컴포넌트에서 선언을 한 뒤에 자녀에게 보내주는 식으로 PropsDrill을 하였습니다. 하지만 개발을 하면서 페이지 컴포넌트의 기능을 조금더 작게 쪼개다 보니 너무 드릴링이 심해졌습니다. Props Drill을 최소화 하기 위해서 컴포넌트를 합치는 방법도 있지만 각 컴포넌트가 너무 비대해져서 그럴수 없었습니다.

그래서 Context API를 사용하여 서버의 상태를 관리하기로 했습니다. Props 드릴링을 최소화하면서 서버의 상태를 저장하여 사용함으로써 Todo의 생성, 수정, 삭제를 최신의 상태로 반영하고 싶었습니다. 평소에 Tanstack-Query를 자주 사용해왔기 때문에 최대한 비슷한 형태로 기능을 모방하고자 했습니다.

[ContextProvider.tsx](./src/lib/state/ContextProvider.tsx)

```tsx
export const AppContext = React.createContext<AppContext>(null!);
const authDefault = {
  token: "",
  email: "",
  password: "",
  error: { statusCode: 0, message: "" },
  isEmail: false,
  isPassword: false,
  isSuccess: false,
  isSignUp: false,
  isError: false,
  isLogin: false
};
const todoDefault = {
  isSuccess: false,
  data: undefined
};
const ContextProvider = ({ children }: ContextProps) => {
  const [auth, setAuth] = useState<IAuthProps>(authDefault);
  const [todo, setTodo] = useState<Todo>(todoDefault);

  const value = {
    auth,
    setAuth,
    todo,
    setTodo
  };

  return <AppContext.Provider value={value} children={children} />;
};

export default ContextProvider;
```

Context API를 코드를 작성할 때, todo의 값을 직접 담아서 클라이언트에서 업데이트 하는 것을 최대한 지양하고 서버의 상태만으로 Todo List를 업데이트 하기 위한 아이디어를 최대한 담으려고 했습니다. 그렇게 한 이유는 상태가 서버의 상태와 클라이언트의 상태로 흩어지게 되면 상태 관리가 너무 어렵기 때문입니다.

[Todo.tsx](./src/Pages/Todo/Todo.tsx)

```ts
const Todo = () => {
  const {
    todo: { isSuccess }
  } = useContext(AppContext);

  const { todoList, getItem } = useGetTodo();

  useEffect(() => {
    if (isSuccess) {
      getItem();
    }
  }, [isSuccess]);

  return (
    <TodoContainer>
      <TodoCreate />
      <TodoList todoList={todoList} />
    </TodoContainer>
  );
};
```

Todo 컴포넌트는 전역 상태인 isSuccess가 true일 때, getItem을 호출합니다. 그래서 TodoCreate,TodoEdit,TodoItem 컴포넌트에서 서버에 요청을 보내서 성공을 했을 경우 isSuccess 값을 변경합니다. 이렇게 해서 서버에서 상태를 관리할 수 있었습니다.

[TodoCreate.tsx](./src/Pages/Todo/TodoCreate.tsx)

```ts
const TodoCreate = () => {
  const { setTodo: setContextTodo } = useContext(AppContext);
  const { handleCreateTodoContents, isSuccess, isError, error } =
    useCreateTodo();
  // 생략
  useEffect(() => {
    if (isSuccess) {
      setTodo("");
      setContextTodo((pre) => ({ ...pre, isSuccess }));
    } else {
      setContextTodo((pre) => ({ ...pre, isSuccess: false }));
    }
  }, [isSuccess]);
  // 생략
};
```

Authentication과 Todo 페이지의 상태는 모두 이러한 형태로 관리되고 있습니다.

### 횡단 관심사

이 프로젝트에서 횡단 관심사는 토큰의 유무와 관련이 있습니다. 유저 로그인 여부를 로컬 스토리지에 저장된 토큰 값을 바탕으로 진행하게 됩니다. 그래서 TokenRepository 클래스를 통해서 검증 로직을 분리하였습니다. 이 로직은 코드에 전역적으로 사용될 수 있기 때문에 검증 로직을 손쉽게 할 수 있습니다.

[tokenRepository.ts](./src/lib/repository/tokenRepository.ts)

```typescript
class TokenRepository<TValue> implements ITokenRepository<TValue> {
  getLocalStorage = (key: Key) => {
    const token = localStorage.get(key);
    if (token) {
      return JSON.parse(token);
    }
    return null;
  };

  setLocalStorage = (key: Key, value: TValue) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  removeLocalStorage = (key: Key) => {
    localStorage.removeItem(key);
  };
}
```
