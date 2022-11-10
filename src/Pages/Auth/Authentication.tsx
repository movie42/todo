import { useEffect } from "react";
import { useLocalStorage } from "@/lib/hooks";

import { useNavigate } from "react-router-dom";
import { LOCAL_STORAGE_KEY } from "@/lib/Immutable";

import Login from "./Login";
import SignUp from "./SignUp";
import { useAppContext } from "@/lib/state";
import { AuthenticationContainer, HeadTitleContainer } from "./Styles";

const Authentication = () => {
  const {
    auth: { isSuccess, token, isSignUp },
    setAuth
  } = useAppContext();

  const navigate = useNavigate();
  const { setLocalStorage } = useLocalStorage();

  useEffect(() => {
    if (isSuccess) {
      setAuth({ isLogin: true });
      setLocalStorage(LOCAL_STORAGE_KEY, { token });
      navigate("/todo", { replace: true });
    }
  }, [isSuccess]);

  return (
    <AuthenticationContainer>
      <HeadTitleContainer isSignUp={isSignUp}>
        <h1>지금 당장</h1>
        <p>당신의 삶을 효과적으로 관리하는 방법. 지금 시작해보세요.</p>
      </HeadTitleContainer>
      {isSignUp ? <SignUp /> : <Login />}
    </AuthenticationContainer>
  );
};

export default Authentication;
