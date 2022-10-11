import { useEffect } from "react";
import { useRequestAuthentication } from "./hooks";
import { useLocalStorage, useValidate } from "@/lib/hooks";

import { useNavigate } from "react-router-dom";
import { LOCAL_STORAGE_KEY } from "@/lib/Immutable";

import Login from "./Login";
import SignUp from "./SignUp";

const Authentication = () => {
  const navigate = useNavigate();
  const {
    email,
    setEmail,
    password,
    setPassword,
    isEmail,
    isPassword,
    handleValidate
  } = useValidate();
  const {
    handleSignin,
    handleSignup,
    token,
    isError,
    isSuccess,
    error,
    isSignUp,
    setIsSignUp
  } = useRequestAuthentication();
  const { setLocalStorage, getLocalStorage } = useLocalStorage();

  useEffect(() => {
    if (isSuccess) {
      setLocalStorage(LOCAL_STORAGE_KEY, { token });
      navigate("/todo", { replace: true });
    }
  }, [isSuccess]);

  return !isSignUp ? (
    <SignUp
      setIsSignUp={setIsSignUp}
      handleSignup={handleSignup}
      email={email}
      password={password}
    />
  ) : (
    <Login
      handleSignin={handleSignin}
      isError={isError}
      error={error}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      isEmail={isEmail}
      isPassword={isPassword}
      handleValidate={handleValidate}
    />
  );
};

export default Authentication;
