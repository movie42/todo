import { useState } from "react";
import { useAuthContext } from "@/lib/state/AuthContextProvider";
import { AxiosError } from "axios";

export interface AuthenticationFormValue {
  email: string;
  password: string;
}

export interface ErrorProps {
  statusCode?: number;
  message: string;
}

const useRequestAuthentication = () => {
  const { login, signUp } = useAuthContext();

  const [isSignUp, setIsSignUp] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<ErrorProps>();
  const [token, setToken] = useState("");

  const handleSignup = async ({ email, password }: AuthenticationFormValue) => {
    setIsSuccess(false);
    setIsError(false);

    const response = await signUp(email, password);

    if (response instanceof AxiosError) {
      const { statusCode, message } = response.response?.data || {
        statusCode: 401,
        message: "알 수 없는 이유로 회원 가입을 진행할 수 없습니다."
      };

      setIsError(true);
      setError({
        statusCode,
        message
      });
      return { statusCode, message };
    }

    if (response?.data) {
      const { access_token } = response.data;
      setIsSuccess(true);
      setToken(access_token);
      return;
    }
  };

  const handleSignin = async ({ email, password }: AuthenticationFormValue) => {
    setIsSuccess(false);
    setIsError(false);
    const response = await login(email, password);

    if (response instanceof AxiosError) {
      const { statusCode, message } = response.response?.data || {
        statusCode: 400,
        message: "비밀번호 또는 아이디를 확인해주세요."
      };
      console.error(statusCode, message);
      setIsError(true);
      setError({
        statusCode,
        message: "아이디 또는 비밀번호를 확인해주"
      });
      setIsSignUp(true);
      return { statusCode, message };
    }

    if (response?.data) {
      const { access_token } = response.data;
      setIsSuccess(true);
      setToken(access_token);
      return;
    }
  };

  return {
    handleSignin,
    handleSignup,
    token,
    error,
    isError,
    isSuccess,
    isSignUp,
    setIsSignUp,
    setIsError
  };
};

export default useRequestAuthentication;
