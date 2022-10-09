import { getData } from "@/lib/api/api";
import { LOCAL_STORAGE_KEY } from "@/lib/Immutable";
import { useLocalStorage } from "@/lib/hooks";
import { useEffect, useState } from "react";

interface ITodoItemProps {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

const useGetTodo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [todoList, setTodoList] = useState<ITodoItemProps[]>([
    {
      id: 1,
      todo: "",
      isCompleted: false,
      userId: 1
    }
  ]);

  const { getLocalStorage } = useLocalStorage();

  const getItem = async () => {
    setIsLoading(true);
    setIsSuccess(false);

    const { token } = getLocalStorage(LOCAL_STORAGE_KEY);

    if (token) {
      const response = await getData({ url: "/todos", token });
      setTodoList([...response]);

      setIsLoading(false);
      setIsSuccess(true);

      if (response.responseError) {
        setIsLoading(false);
        setIsSuccess(false);
        throw new Error(response.responseError.message);
      }

      return response;
    }

    setIsLoading(false);
    setIsSuccess(false);
    return [];
  };

  useEffect(() => {
    getItem();
  }, []);

  return { todoList, getItem, isSuccess, isLoading };
};

export default useGetTodo;
