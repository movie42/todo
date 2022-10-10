import React from "react";
import { Form, Label } from "@/Components";
import { AuthenticationFormValue, ErrorProps } from "./hooks";
import { Container, FormContainer, FormItemWrapper } from "./Styles";
import { useControlButtonDisabled } from "@/lib/hooks";

interface ILoginProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  isEmail: boolean;
  isPassword: boolean;
  handleValidate: (value: string, type: "email" | "password") => void;
  handleSignin: ({ email, password }: AuthenticationFormValue) => Promise<
    | {
        statusCode: any;
        message: any;
      }
    | undefined
  >;
  isError: boolean;
  error: ErrorProps | null;
}

const Login = ({
  handleSignin,
  isError,
  error,
  email,
  setEmail,
  password,
  setPassword,
  isEmail,
  isPassword,
  handleValidate
}: ILoginProps) => {
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
