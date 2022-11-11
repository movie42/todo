import React, { ReactNode, useContext } from "react";
import { TodoService } from "@/Service";
import { AxiosHTTPClient } from "../api/";
import { BASE_URL } from "../constants";
import { TokenRepository } from "../repository";

const TodoContext = React.createContext<TodoService>(null!);

const httpClient = new AxiosHTTPClient(BASE_URL);
const tokenRepository = new TokenRepository();
const todoService = new TodoService(httpClient, tokenRepository);

export const useTodoContext = () => useContext(TodoContext);

interface ITodoContextProviderProps {
  children: ReactNode;
}

const TodoContextProvider = ({ children }: ITodoContextProviderProps) => {
  return <TodoContext.Provider value={todoService} children={children} />;
};

export default TodoContextProvider;
