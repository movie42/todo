import axios, { AxiosError } from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 7rem);
`;
const FormContainer = styled.div``;
const FormItemWrapper = styled.div`
  margin: 2rem 0;
`;

const REG_EXP = {
  email: "[a-z0-9]+@[a-z]+.[a-z]{2,3}",
  password: "^.{8,}"
};

const Authentication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const isValidate = (value: string, type: "email" | "password") => {
    if (type === "email") {
      const isEmail = value.match(REG_EXP.email);
      return isEmail !== null ? true : false;
    }

    if (type === "password") {
      const isPassword = value.match(REG_EXP.password);
      return isPassword !== null ? true : false;
    }

    return false;
  };

  const handleSignin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/auth/signin",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 404) {
        throw new Error();
      }

      return response.data;
      return;
    } catch (error) {
      const responseError = error as AxiosError<{
        statusCode: number;
        message: string;
      }>;

      if (responseError.response?.data?.statusCode === 401) {
        return { statusCode: 401, message: "패스워드를 다시 확인해보세요." };
      }

      return responseError.response?.data;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isEmail && isPassword) {
      const signin = await handleSignin();

      if (signin?.access_token) {
        console.log("success");
        return;
      }

      if (signin?.message === "해당 사용자가 존재하지 않습니다.") {
        try {
          const response = await axios.post(
            "http://localhost:8000/auth/signup",
            { email, password },
            { headers: { "Content-Type": "application/json" } }
          );

          if (response.status === 404) {
            throw new Error();
          }

          return response.data;
        } catch (error) {
          const responseError = error as AxiosError<{
            statusCode: number;
            message: string;
          }>;

          return responseError;
        }
      }
      return;
    }

    return;
  };

  useEffect(() => {
    if (isEmail && isPassword) {
      setButtonDisabled(false);
    }
  }, [isEmail, isPassword]);

  return (
    <Container>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <FormItemWrapper>
            <label>이메일</label>
            <input
              type="text"
              placeholder="이메일을 입력해주세요."
              value={email}
              onChange={(e) => {
                setEmail(e.currentTarget.value);
                const isEmail = isValidate(e.currentTarget.value, "email");
                if (isEmail) {
                  setIsEmail(true);
                } else {
                  setIsEmail(false);
                }
              }}
            />
          </FormItemWrapper>
          <FormItemWrapper>
            <label>비밀번호</label>
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요."
              value={password}
              onChange={(e) => {
                setPassword(e.currentTarget.value);
                const isPassword = isValidate(
                  e.currentTarget.value,
                  "password"
                );
                if (isPassword) {
                  setIsPassword(true);
                } else {
                  setIsPassword(false);
                }
              }}
            />
          </FormItemWrapper>
          <button disabled={buttonDisabled}>로그인/회원가입</button>
        </form>
      </FormContainer>
    </Container>
  );
};

export default Authentication;
