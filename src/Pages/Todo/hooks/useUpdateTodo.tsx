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
  const [isSuccess, setIsSuccess] = useState<boolean | null>(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<{
    statusCode: number;
    message: string;
  } | null>(null);
  const { getLocalStorage } = useLocalStorage();

  const handleUpdateTodo = async (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>,
    { id, todo, isCompleted }: UpdateTodoData
  ) => {
    e.preventDefault();
    setIsSuccess(null);

    const { token } = getLocalStorage(LOCAL_STORAGE_KEY);

    if (todo && token) {
      const response = await putData({
        url: `/todos/${id}`,
        data: { todo, isCompleted },
        token
      });

      if (response.id) {
        setIsSuccess(true);
        return;
      }

      const {
        response: {
          data: { statusCode, message }
        }
      } = response;

      setIsSuccess(false);
      setError({ statusCode, message });
      setIsError(true);
    }
  };

  return { isSuccess, handleUpdateTodo, isError, error };
};

export default useUpdateTodo;
