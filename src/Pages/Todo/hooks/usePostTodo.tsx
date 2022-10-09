import React, { useState } from "react";
import { postData } from "@/lib/api/api";
import { LOCAL_STORAGE_KEY } from "@/lib/Immutable";
import { useLocalStorage } from "@/lib/hooks";

interface IusePostTodoProps {}

const usePostTodo = () => {
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

      if (response) {
        setIsSuccess(true);
        return;
      }

      setIsSuccess(false);
    }
  };

  return { isSuccess, handleCreateTodoContents };
};

export default usePostTodo;
