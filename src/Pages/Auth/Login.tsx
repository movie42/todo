import React, { useContext, useEffect } from "react";
import { Form, Label } from "@/Components";
import { AuthenticationFormValue, useRequestAuthentication } from "./hooks";
import { Container, FormContainer, FormItemWrapper } from "./Styles";
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
    handleValidate
  } = useValidate();
  const { token, handleSignin, isError, error, isSuccess, isSignUp } =
    useRequestAuthentication();

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
    if (isError) {
      setAuth((pre) => ({ ...pre, isError, isSignUp, email, password }));
    }
  }, [isError]);

  return (
    <Container>
      <FormContainer>
        {isError && <Label>{error?.message}</Label>}
        <Form onSubmit={(e) => handleSubmit(e, { email, password })}>
          <FormItemWrapper>
            <Form.Label>이메일</Form.Label>
            <Form.Input
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
            <Form.Label>비밀번호</Form.Label>
            <Form.Input
              type="password"
              placeholder="비밀번호를 입력해주세요."
              value={password}
              onChange={(e) => {
                setPassword(e.currentTarget.value);
                handleValidate(e.currentTarget.value, "password");
              }}
            />
          </FormItemWrapper>
          <Form.Button disabled={buttonDisabled}>로그인</Form.Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Login;
