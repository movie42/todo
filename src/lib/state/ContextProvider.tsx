import React, { useState } from "react";

interface ContextProps {
  children: React.ReactNode;
}

interface IAuthProps {
  token?: string;
  email?: string;
  password?: string;
  error?: { statusCode: number; message: string };
  isEmail?: boolean;
  isPassword?: boolean;
  isSuccess?: boolean;
  isSignUp?: boolean;
  isError?: boolean;
  isLogin?: boolean;
}

interface ITodoProps {
  id?: number;
  todo?: string;
  isCompleted?: boolean;
  userId?: number;
}

interface AppContext {
  auth: IAuthProps;
  setAuth: React.Dispatch<React.SetStateAction<IAuthProps>>;
  todo: ITodoProps[] | null;
  setTodo: React.Dispatch<React.SetStateAction<ITodoProps[] | null>>;
}

export const AppContext = React.createContext<AppContext>(null!);
const authDefault = {
  token: "",
  email: "",
  password: "",
  error: { statusCode: 0, message: "" },
  isEmail: false,
  isPassword: false,
  isSuccess: false,
  isSignUp: false,
  isError: false,
  isLogin: false
};
const ContextProvider = ({ children }: ContextProps) => {
  const [auth, setAuth] = useState<IAuthProps>(authDefault);
  const [todo, setTodo] = useState<ITodoProps[] | null>(null);

  const value = {
    auth,
    setAuth,
    todo,
    setTodo
  };

  return <AppContext.Provider value={value} children={children} />;
};

export default ContextProvider;
