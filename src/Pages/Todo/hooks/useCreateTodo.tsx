import React, { useState } from "react";
import { postData } from "@/lib/api/api";
import { LOCAL_STORAGE_KEY } from "@/lib/Immutable";
import { useLocalStorage } from "@/lib/hooks";

const useCreateTodo = () => {
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<{
    statusCode: number;
    message: string;
  } | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const { getLocalStorage } = useLocalStorage();

  const handleCreateTodoContents = async (
    e: React.FormEvent<HTMLFormElement>,
    todo: string
  ) => {
    e.preventDefault();
    setIsSuccess(false);

    const { token } = getLocalStorage(LOCAL_STORAGE_KEY);

    if (todo && token) {
      const response = await postData({
        url: "/todos",
        data: { todo },
        token
      });

      if (response.id) {
        setIsSuccess(true);
        setIsError(false);
        return;
      }

      const {
        response: {
          data: { statusCode, message }
        }
      } = response;

      setError({ statusCode, message });
      setIsError(true);
      setIsSuccess(false);
    }
  };

  return { isSuccess, handleCreateTodoContents, isError, error };
};

export default useCreateTodo;
