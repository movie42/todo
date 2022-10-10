import React from "react";
import { AuthenticationFormValue } from "./hooks";
import { Container } from "./Styles";

interface ISignUpProps {
  email: string;
  password: string;
  handleSignup: ({ email, password }: AuthenticationFormValue) => Promise<
    | {
        statusCode: any;
        message: any;
      }
    | undefined
  >;
  setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUp = ({
  handleSignup,
  setIsSignUp,
  email,
  password
}: ISignUpProps) => {
  const handleConfirm = async () => {
    await handleSignup({ email, password });
  };

  const handleCancel = () => {
    setIsSignUp(true);
  };

  return (
    <Container>
      <h1>회원이 아니네요. 가입하실래요?</h1>
      <button onClick={handleCancel}>아니요</button>
      <button onClick={handleConfirm}>네</button>
    </Container>
  );
};

export default SignUp;
