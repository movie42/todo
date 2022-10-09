import { getData } from "@/lib/api/api";
import { LOCAL_STORAGE_KEY } from "@/lib/Immutable/Immutable";
import useLocalStorage from "@/Pages/Auth/hooks/useLocalStorage";
import { useEffect, useState } from "react";

interface ITodoItemProps {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

const useGetTodo = () => {
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
    const { token } = getLocalStorage(LOCAL_STORAGE_KEY);

    if (token) {
      const response = await getData({ url: "/todos", token });
      setTodoList([...response]);
      return response;
    }

    return [];
  };

  useEffect(() => {
    getItem();
  }, []);

  return todoList;
};

export default useGetTodo;
