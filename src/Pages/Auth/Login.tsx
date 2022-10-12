import React, { useContext, useEffect } from "react";
import { Form, Label } from "@/Components";
import { AuthenticationFormValue, useRequestAuthentication } from "./hooks";
import {
  Container,
  FormContainer,
  FormItemWrapper,
  LoginButton,
  LoginErrorLabel,
  LoginForm,
  LoginInput,
  LoginLabel
} from "./Styles";
import { useControlButtonDisabled, useValidate } from "@/lib/hooks";
import { AppContext } from "@/lib/state";

const Login = () => {
  const { setAuth } = useContext(AppContext);
  const {
    email,
    setEmail,
    password,
    setPassword,
    isEmail,
    isPassword,
    handleValidate,
    setIsEmail,
    setIsPassword
  } = useValidate();
  const {
    token,
    handleSignin,
    isError,
    error,
    isSuccess,
    isSignUp,
    setIsError
  } = useRequestAuthentication();

  const buttonDisabled = useControlButtonDisabled({
    data: [isEmail, isPassword]
  });

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    { email, password }: AuthenticationFormValue
  ) => {
    e.preventDefault();
    await handleSignin({ email, password });
  };

  useEffect(() => {
    if (isSuccess) {
      setAuth((pre) => ({ ...pre, token, isSuccess }));
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError === null) {
      return;
    }

    if (isError) {
      setIsEmail(false);
      setIsPassword(false);
      setAuth((pre) => ({ ...pre, isError, isSignUp, email, password }));
    } else {
      setAuth((pre) => ({ ...pre, isError: false }));
    }
  }, [isError]);

  useEffect(() => {
    setIsError(null);
    if (isEmail && isPassword) {
      return;
    }
    setIsError(true);
  }, [isEmail, isPassword]);

  return (
    <Container>
      <FormContainer>
        <LoginErrorLabel isError={isError}>{error?.message}</LoginErrorLabel>
        <LoginForm onSubmit={(e) => handleSubmit(e, { email, password })}>
          <FormItemWrapper>
            <LoginLabel>이메일</LoginLabel>
            <LoginInput
              isValidate={isEmail}
              type="text"
              placeholder="이메일을 입력해주세요."
              value={email}
              onChange={(e) => {
                setEmail(e.currentTarget.value);
                handleValidate(e.currentTarget.value, "email");
              }}
            />
          </FormItemWrapper>
          <FormItemWrapper>
            <LoginLabel>비밀번호</LoginLabel>
            <LoginInput
              isValidate={isPassword}
              type="password"
              placeholder="비밀번호를 입력해주세요."
              value={password}
              onChange={(e) => {
                setPassword(e.currentTarget.value);
                handleValidate(e.currentTarget.value, "password");
              }}
            />
          </FormItemWrapper>
          <LoginButton disabled={buttonDisabled}>로그인</LoginButton>
        </LoginForm>
      </FormContainer>
    </Container>
  );
};

export default Login;
