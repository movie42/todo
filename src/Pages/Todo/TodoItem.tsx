import React, { useState } from "react";
import TodoEdit from "./TodoEdit";

interface ITodoItemProps {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

const TodoItem = ({ id, todo, isCompleted, userId }: ITodoItemProps) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <li>
      {isEdit ? (
        <TodoEdit />
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
