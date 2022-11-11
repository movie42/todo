// import { getData } from "@/lib/api/api";
// import { LOCAL_STORAGE_KEY } from "@/lib/constants";
// import { useLocalStorage } from "@/lib/hooks";
import { useTodoContext } from "@/lib/state";
import { Todo } from "@/lib/types";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";

const useGetTodo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [todoList, setTodoList] = useState<Todo[]>();
  const { getTodo } = useTodoContext();

  const getItem = async () => {
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);

    const response = await getTodo();
    if (response instanceof AxiosError) {
      setIsError(true);
      setIsLoading(false);
      setIsSuccess(false);
      setTodoList([]);
      return;
    }
    const todos = response?.data;
    setTodoList(todos);
    setIsLoading(false);
    setIsSuccess(true);
  };

  useEffect(() => {
    getItem();
  }, []);

  return { todoList, getItem, isSuccess, isLoading, isError };
};

export default useGetTodo;
