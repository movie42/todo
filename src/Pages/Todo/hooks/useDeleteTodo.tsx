import { useEffect, useState } from "react";
import { deleteData } from "@/lib/api/api";
import { useLocalStorage } from "@/lib/hooks";
import { LOCAL_STORAGE_KEY } from "@/lib/Immutable";

interface IuseDeleteTodoProps {}

const useDeleteTodo = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const { getLocalStorage } = useLocalStorage();

  const handleDelete = async (id: number) => {
    setIsSuccess(false);
    const { token } = getLocalStorage(LOCAL_STORAGE_KEY);

    if (token) {
      const response = await deleteData({ url: `/todos/${id}`, token });

      if (response.status === 204) {
        setIsSuccess(true);
        return;
      }

      setIsSuccess(false);
    }
  };

  useEffect(() => {
    setIsSuccess(false);
  }, []);

  return { handleDelete, isSuccess };
};

export default useDeleteTodo;
