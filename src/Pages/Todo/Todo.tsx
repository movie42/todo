import React from "react";
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";

interface ITodoProps {}

const Todo = () => {
  const todoList = [
    {
      id: 1,
      todo: "더미 아이디",
      isCompleted: false,
      userId: 1
    },
    {
      id: 2,
      todo: "아이디 뭐라고???",
      isCompleted: false,
      userId: 1
    },
    {
      id: 3,
      todo: "일론 머스크 별론데",
      isCompleted: false,
      userId: 1
    }
  ];

  return (
    <div>
      <TodoCreate />
      <TodoList todoList={todoList} />
    </div>
  );
};

export default Todo;
