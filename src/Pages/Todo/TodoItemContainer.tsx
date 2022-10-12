import { useState } from "react";

import TodoEdit from "./TodoEdit";
import TodoItem from "./TodoItem";
import { TodoListItem } from "./Styles";

interface ITodoItemProps {
  id: number;
  todo: string;
  isCompleted: boolean;
}

const TodoItemContainer = ({ id, todo, isCompleted }: ITodoItemProps) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <TodoListItem isEdit={isEdit}>
      {isEdit ? (
        <TodoEdit
          id={id}
          todo={todo}
          isCompleted={isCompleted}
          setIsEdit={setIsEdit}
        />
      ) : (
        <TodoItem
          id={id}
          isCompleted={isCompleted}
          todo={todo}
          setIsEdit={setIsEdit}
        />
      )}
    </TodoListItem>
  );
};

export default TodoItemContainer;
