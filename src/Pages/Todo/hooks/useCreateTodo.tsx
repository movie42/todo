import React, { useState } from "react";
import { useTodoContext } from "@/lib/state";
import { AxiosError } from "axios";

const useCreateTodo = () => {
  const { createTodo } = useTodoContext();
  const [isSuccess, setIsSuccess] = useState<boolean | null>(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<{
    statusCode: number;
    message: string;
  } | null>(null);

  const handleCreateTodoContents = async (
    e: React.FormEvent<HTMLFormElement>,
    todo: string
  ) => {
    e.preventDefault();
    setIsSuccess(null);

    const response = await createTodo(todo);

    if (response instanceof AxiosError) {
      const { statusCode, message } = response.response?.data || {
        statusCode: 401,
        message: "할 일을 만들 수가 없네요."
      };

      setError({
        statusCode,
        message
      });
      setIsSuccess(false);
      setIsError(true);
      return { statusCode, message };
    }

    const successCreateTodo = response?.data;
    setIsSuccess(true);
    return successCreateTodo;
  };

  return { isSuccess, handleCreateTodoContents, isError, error };
};

export default useCreateTodo;
