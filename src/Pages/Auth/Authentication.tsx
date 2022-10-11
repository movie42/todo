import { useContext, useEffect } from "react";
import { useRequestAuthentication } from "./hooks";
import { useLocalStorage, useValidate } from "@/lib/hooks";

import { useNavigate } from "react-router-dom";
import { LOCAL_STORAGE_KEY } from "@/lib/Immutable";

import Login from "./Login";
import SignUp from "./SignUp";
import { AppContext } from "@/lib/state";

const Authentication = () => {
  const {
    auth: { isSuccess, token, isSignUp },
    setAuth
  } = useContext(AppContext);

  const navigate = useNavigate();
  const { setLocalStorage } = useLocalStorage();

  useEffect(() => {
    if (isSuccess) {
      setAuth({ isLogin: true });
      setLocalStorage(LOCAL_STORAGE_KEY, { token });
      navigate("/todo", { replace: true });
    }
  }, [isSuccess]);

  return isSignUp ? <SignUp /> : <Login />;
};

export default Authentication;
