import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import { postData } from "@/lib/hook/api/api";

interface AuthenticationFormValue {
  email: string;
  password: string;
}
interface IuseRequestAuthenticationProps {}

const useRequestAuthentication = () => {
  const [token, setToken] = useState("");

  const handleSignup = async ({ email, password }: AuthenticationFormValue) => {
    const response = await postData<AuthenticationFormValue>({
      url: "/auth/signup",
      data: {
        email,
        password
      }
    });

    return response;
  };

  const handleSignin = async ({ email, password }: AuthenticationFormValue) => {
    const response = await postData<AuthenticationFormValue>({
      url: "/auth/signin",
      data: {
        email,
        password
      }
    });

    if (response?.data?.statusCode === 401) {
      return { statusCode: 401, message: "패스워드를 다시 확인해보세요." };
    }

    return response;
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    { email, password }: AuthenticationFormValue
  ) => {
    e.preventDefault();

    const signin = await handleSignin({ email, password });

    if (signin?.access_token) {
      setToken(signin?.access_token);
      return signin?.access_token;
    }

    if (signin?.message === "해당 사용자가 존재하지 않습니다.") {
      const signup = await handleSignup({ email, password });
      if (signup.access_token) {
        setToken(signup?.access_token);
        return signup.access_token;
      }

      return signup;
    }
  };

  return { handleSubmit, handleSignin, handleSignup, token };
};

export default useRequestAuthentication;
