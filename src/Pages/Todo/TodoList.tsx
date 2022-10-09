import React from "react";
import TodoItem from "./TodoItem";

interface ITodoListProps {
  todoList: ITodoItemProps[];
}

interface ITodoItemProps {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

const TodoList = ({ todoList }: ITodoListProps) => {
  return (
    <ul>
      {todoList.map(({ id, todo, isCompleted, userId }) => (
        <TodoItem
          id={id}
          todo={todo}
          isCompleted={isCompleted}
          userId={userId}
        />
      ))}
    </ul>
  );
};

export default TodoList;
