import { AppContext } from "@/lib/state";
import React, { useContext, useEffect } from "react";
import useDeleteTodo from "./hooks/useDeleteTodo";
import useUpdateTodo from "./hooks/useUpdateTodo";

interface ITodoItemProps {
  id: number;
  isCompleted: boolean;
  todo: string;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const TodoItem = ({ id, isCompleted, todo, setIsEdit }: ITodoItemProps) => {
  const { setTodo } = useContext(AppContext);
  const { handleUpdateTodo, isSuccess: isUpdateSuccess } = useUpdateTodo();
  const { handleDelete, isSuccess: isDeleteSuccess } = useDeleteTodo();

  useEffect(() => {
    if (isUpdateSuccess) {
      setTodo((pre) => ({ ...pre, isSuccess: isUpdateSuccess }));
    } else {
      setTodo((pre) => ({ ...pre, isSuccess: false }));
    }
  }, [isUpdateSuccess]);

  useEffect(() => {
    if (isDeleteSuccess) {
      setTodo((pre) => ({ ...pre, isSuccess: isDeleteSuccess }));
    } else {
      setTodo((pre) => ({ ...pre, isSuccess: false }));
    }
  }, [isDeleteSuccess]);

  return (
    <>
      <button
        className={isCompleted ? "complete" : "complete-unset"}
        onClick={(e) =>
          handleUpdateTodo(e, { id, isCompleted: !isCompleted, todo })
        }></button>
      <h3>{todo}</h3>

      <button className="edit" onClick={() => setIsEdit(true)}>
        수정
      </button>
      <button className="delete" onClick={() => handleDelete(id)}>
        삭제
      </button>
    </>
  );
};

export default TodoItem;
