import React from "react";
import { UpdateTodoData } from "./hooks/useUpdateTodo";
import TodoItem from "./TodoItem";

interface ITodoListProps {
  todoList: ITodoItemProps[];
  handleUpdateTodo: (
    e: React.FormEvent<HTMLFormElement>,
    data: UpdateTodoData
  ) => Promise<void>;
}

interface ITodoItemProps {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId?: number;
}

const TodoList = ({ todoList, handleUpdateTodo }: ITodoListProps) => {
  return (
    <ul>
      {todoList.map(({ id, todo, isCompleted, userId }) => (
        <TodoItem
          key={id}
          id={id}
          todo={todo}
          isCompleted={isCompleted}
          handleUpdateTodo={handleUpdateTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
