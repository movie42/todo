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

interface TodoData {
  id?: number;
  todo?: string;
  isCompleted?: boolean;
  userId?: number;
}

interface Todo {
  data?: TodoData[];
  isSuccess?: boolean;
}

interface AppContext {
  auth: IAuthProps;
  setAuth: React.Dispatch<React.SetStateAction<IAuthProps>>;
  todo: Todo;
  setTodo: React.Dispatch<React.SetStateAction<Todo>>;
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
const todoDefault = {
  isSuccess: false,
  data: undefined
};
const ContextProvider = ({ children }: ContextProps) => {
  const [auth, setAuth] = useState<IAuthProps>(authDefault);
  const [todo, setTodo] = useState<Todo>(todoDefault);

  const value = {
    auth,
    setAuth,
    todo,
    setTodo
  };

  return <AppContext.Provider value={value} children={children} />;
};

export default ContextProvider;
