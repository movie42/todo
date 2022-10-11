import React, { useState } from "react";

interface AppContext {
  [key: string]: any;
}

interface ContextProps {
  children: React.ReactNode;
}

interface IAuthProps {
  [key: string]: any;
}

interface ITodoProps {
  [key: string]: any;
}

export const AppContext = React.createContext<AppContext>(null!);

const ContextProvider = ({ children }: ContextProps) => {
  const [auth, setAuth] = useState<IAuthProps | null>(null);
  const [todo, setTodo] = useState<ITodoProps | null>(null);

  const value = {
    auth,
    setAuth,
    todo,
    setTodo
  };

  return <AppContext.Provider value={value} children={children} />;
};

export default ContextProvider;
