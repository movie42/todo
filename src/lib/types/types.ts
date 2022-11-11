import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export interface ClientProps<TVariable> {
  endPoint: string;
  data?: TVariable;
  config?: AxiosRequestConfig;
}

export interface ServerError {
  statusCode: number;
  message: string;
  error: string;
}
export type ClientReturnType<TData, TError> = Promise<
  AxiosResponse<TData> | AxiosError<TError> | undefined
>;

export interface IHTTPClient {
  get: <TData, TError, TVariable = unknown>({
    endPoint,
    config
  }: ClientProps<TVariable>) => ClientReturnType<TData, TError>;
  post: <TData, TError, TVariable>({
    endPoint,
    data,
    config
  }: ClientProps<TVariable>) => ClientReturnType<TData, TError>;
  put: <TData, TError, TVariable>({
    endPoint,
    data,
    config
  }: ClientProps<TVariable>) => ClientReturnType<TData, TError>;
  delete: <TData, TError, TVariable = unknown>({
    endPoint,
    config
  }: ClientProps<TVariable>) => ClientReturnType<TData, TError>;
}

export type Key = "WANTED_TODO_STORE";

export interface ITokenRepository<TValue> {
  getLocalStorage: (key: Key) => { token: string } | null;
  setLocalStorage: (key: Key, value: TValue) => void;
  removeLocalStorage: (key: Key) => void;
}

export interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export interface AuthenticationFormValue {
  email: string;
  password: string;
}

export interface ErrorProps {
  statusCode?: number;
  message: string;
}

export type GetTodoData = Todo[];
export type CreateTodoData = Todo;
export type UpdateTodoData = Todo;
export type DeleteTodoData = { status: number };

export interface ITodoService {
  getTodo: () => ClientReturnType<GetTodoData, ServerError>;
  createTodo: (todo: string) => ClientReturnType<CreateTodoData, ServerError>;
  updateTodo: (
    todo: Omit<Todo, "userId">
  ) => ClientReturnType<UpdateTodoData, ServerError>;
  deleteTodo: (id: number) => ClientReturnType<DeleteTodoData, ServerError>;
}

export type LoginData = { access_token: string };
export type SignUpData = { access_token: string };
export type LoginVariable = { email: string; password: string };
export type SignUpVariable = { email: string; password: string };
export interface IAuthService {
  login: (
    email: string,
    password: string
  ) => ClientReturnType<LoginData, ServerError>;
  signUp: (
    email: string,
    password: string
  ) => ClientReturnType<SignUpData, ServerError>;
}

export interface Token {
  token: string;
}
