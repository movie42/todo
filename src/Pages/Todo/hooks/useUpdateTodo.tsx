import React, { useState } from "react";

import { Todo } from "@/lib/types";
import { useTodoContext } from "@/lib/state";
import { AxiosError } from "axios";

const useUpdateTodo = () => {
  const { updateTodo } = useTodoContext();
  const [isSuccess, setIsSuccess] = useState<boolean | null>(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<{
    statusCode: number;
    message: string;
  } | null>(null);

  const handleUpdateTodo = async (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>,
    todo: Omit<Todo, "userId">
  ) => {
    e.preventDefault();
    setIsSuccess(null);

    const response = await updateTodo({
      ...todo
    });

    if (response instanceof AxiosError) {
      const { statusCode, message } = response.response?.data || {
        statusCode: 401,
        message: "할 일을 수정 할 수가 없네요."
      };

      setError({
        statusCode,
        message
      });
      setIsSuccess(false);
      setIsError(true);
      return { statusCode, message };
    }

    const successUpdateTodo = response?.data;
    setIsSuccess(true);
    return successUpdateTodo;
  };

  return { isSuccess, handleUpdateTodo, isError, error };
};

export default useUpdateTodo;
