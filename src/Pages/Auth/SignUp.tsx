import { AppContext } from "@/lib/state";
import { useContext, useEffect } from "react";
import { useRequestAuthentication } from "./hooks";
import { Container } from "./Styles";

const SignUp = () => {
  const {
    auth: { email, password },
    setAuth
  } = useContext(AppContext);

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
    <Container>
      <h1>회원이 아니네요. 가입하실래요?</h1>
      <button onClick={handleCancel}>아니요</button>
      <button onClick={handleConfirm}>네</button>
    </Container>
  );
};

export default SignUp;
