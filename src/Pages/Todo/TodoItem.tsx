import React, { useState } from "react";
import { UpdateTodoData } from "./hooks/useUpdateTodo";
import TodoEdit from "./TodoEdit";

interface ITodoItemProps {
  id: number;
  todo: string;
  isCompleted: boolean;
  handleUpdateTodo: (
    e: React.FormEvent<HTMLFormElement>,
    data: UpdateTodoData
  ) => Promise<void>;
}

const TodoItem = ({
  id,
  todo,
  isCompleted,
  handleUpdateTodo
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
        <div>
          <h3>{todo}</h3>
          <button onClick={() => setIsEdit(true)}>수정</button>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
