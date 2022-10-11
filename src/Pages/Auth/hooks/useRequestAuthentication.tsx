import { useState } from "react";
import { postData } from "@/lib/api/api";

export interface AuthenticationFormValue {
  email: string;
  password: string;
}

export interface ErrorProps {
  statusCode: number;
  message: string;
}

interface AuthenticationError {
  response: {
    data: ErrorProps;
  };
}

const useRequestAuthentication = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<ErrorProps | null>(null);
  const [token, setToken] = useState("");

  const handleSignup = async ({ email, password }: AuthenticationFormValue) => {
    setIsSuccess(false);

    const response = await postData<
      AuthenticationFormValue,
      AuthenticationError
    >({
      url: "/auth/signup",
      data: {
        email,
        password
      }
    });

    const { access_token } = response;

    if (!access_token) {
      const {
        response: {
          data: { statusCode, message }
        }
      } = response;

      setIsError(true);
      setError({
        statusCode,
        message
      });
      return { statusCode, message };
    }

    setIsSuccess(true);
    setToken(access_token);
  };

  const handleSignin = async ({ email, password }: AuthenticationFormValue) => {
    setIsSuccess(false);

    const response = await postData<
      AuthenticationFormValue,
      AuthenticationError
    >({
      url: "/auth/signin",
      data: {
        email,
        password
      }
    });

    const { access_token } = response;

    if (!access_token) {
      const {
        response: {
          data: { statusCode, message }
        }
      } = response;

      setIsError(true);

      if (statusCode === 401) {
        setError({
          statusCode,
          message: "이메일 또는 비밀번호를 확인해주세요."
        });

        return {
          statusCode,
          message: "이메일 또는 비밀번호를 확인해주세요."
        };
      }

      setError({
        statusCode,
        message
      });

      setIsSignUp(true);

      return { statusCode, message };
    }

    setIsSuccess(true);
    setToken(access_token);
  };

  return {
    handleSignin,
    handleSignup,
    token,
    error,
    isError,
    isSuccess,
    isSignUp,
    setIsSignUp
  };
};

export default useRequestAuthentication;
