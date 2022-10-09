import React from "react";
import { UpdateTodoData } from "./hooks/useUpdateTodo";

interface ITodoItemProps {
  id: number;
  isCompleted: boolean;
  todo: string;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  handleDelete: (id: number) => Promise<void>;
  handleUpdateTodo: (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>,
    data: UpdateTodoData
  ) => Promise<void>;
}

const TodoItem = ({
  id,
  isCompleted,
  todo,
  setIsEdit,
  handleDelete,
  handleUpdateTodo
}: ITodoItemProps) => {
  return (
    <div>
      <h3>{todo}</h3>
      <button onClick={() => setIsEdit(true)}>수정</button>
      <button onClick={() => handleDelete(id)}>삭제</button>
      <button
        onClick={(e) =>
          handleUpdateTodo(e, { id, isCompleted: !isCompleted, todo })
        }>
        완료
      </button>
    </div>
  );
};

export default TodoItem;
