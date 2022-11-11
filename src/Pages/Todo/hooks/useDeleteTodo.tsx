import { useState } from "react";

import { useTodoContext } from "@/lib/state";
import { AxiosError } from "axios";

const useDeleteTodo = () => {
  const { deleteTodo } = useTodoContext();
  const [isSuccess, setIsSuccess] = useState<boolean | null>(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<{
    statusCode?: number;
    message?: string;
  } | null>(null);

  const handleDelete = async (id: number) => {
    setIsSuccess(null);

    const response = await deleteTodo(id);

    if (response instanceof AxiosError) {
      setIsError(true);
      setError({
        statusCode: response.status,
        message: "삭제에 실패하였습니다."
      });
      return;
    }

    const status = response?.status;
    setIsSuccess(true);
    setIsError(false);
    return status;
  };

  return { handleDelete, isSuccess, error, isError };
};

export default useDeleteTodo;
