import { useAppContext } from "@/lib/state";
import { useEffect } from "react";
import { useRequestAuthentication } from "./hooks";
import { SignUpButton, SignUpContainer } from "./Styles";

const SignUp = () => {
  const {
    auth: { email, password },
    setAuth
  } = useAppContext();

  const { handleSignup, setIsSignUp, isSuccess, token, isSignUp } =
    useRequestAuthentication();

  const handleConfirm = async () => {
    if (email && password) {
      await handleSignup({ email, password });
    }
  };

  const handleCancel = () => {
    setIsSignUp(true);
    setAuth((pre) => ({ ...pre, isSignUp }));
  };

  useEffect(() => {
    if (isSuccess) {
      setAuth((pre) => ({ ...pre, token, isSuccess }));
    }
  }, [isSuccess, token]);

  return (
    <SignUpContainer>
      <h2>회원이 아닙니다. 가입하실래요?</h2>
      <div>
        <SignUpButton className="cancel" onClick={handleCancel}>
          아니요
        </SignUpButton>
        <SignUpButton className="confirm" onClick={handleConfirm}>
          네
        </SignUpButton>
      </div>
    </SignUpContainer>
  );
};

export default SignUp;
