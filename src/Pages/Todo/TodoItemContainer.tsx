import React, { useState } from "react";
import { UpdateTodoData } from "./hooks/useUpdateTodo";
import TodoEdit from "./TodoEdit";
import TodoItem from "./TodoItem";

interface ITodoItemProps {
  id: number;
  todo: string;
  isCompleted: boolean;
  handleUpdateTodo: (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>,
    data: UpdateTodoData
  ) => Promise<void>;
  handleDelete: (id: number) => Promise<void>;
}

const TodoItemContainer = ({
  id,
  todo,
  isCompleted,
  handleUpdateTodo,
  handleDelete
}: ITodoItemProps) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <li>
      {isEdit ? (
        <TodoEdit
          id={id}
          todo={todo}
          isCompleted={isCompleted}
          setIsEdit={setIsEdit}
          handleUpdateTodo={handleUpdateTodo}
        />
      ) : (
        <TodoItem
          id={id}
          isCompleted={isCompleted}
          todo={todo}
          setIsEdit={setIsEdit}
          handleDelete={handleDelete}
          handleUpdateTodo={handleUpdateTodo}
        />
      )}
    </li>
  );
};

export default TodoItemContainer;
