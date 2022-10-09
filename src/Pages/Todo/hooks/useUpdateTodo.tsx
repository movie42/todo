import { putData } from "@/lib/api/api";
import { useLocalStorage } from "@/lib/hooks";
import { LOCAL_STORAGE_KEY } from "@/lib/Immutable";
import React, { useState } from "react";

export interface UpdateTodoData {
  id: number;
  todo: string;
  isCompleted: boolean;
}

const useUpdateTodo = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const { getLocalStorage } = useLocalStorage();

  const handleUpdateTodo = async (
    e: React.FormEvent<HTMLFormElement>,
    { id, todo, isCompleted }: UpdateTodoData
  ) => {
    e.preventDefault();
    setIsSuccess(false);

    const { token } = getLocalStorage(LOCAL_STORAGE_KEY);

    if (todo && token) {
      const response = await putData({
        url: `/todos/${id}`,
        data: { todo, isCompleted },
        token
      });

      if (response) {
        setIsSuccess(true);
        return;
      }

      setIsSuccess(false);
    }
  };

  return { isSuccess, handleUpdateTodo };
};

export default useUpdateTodo;
