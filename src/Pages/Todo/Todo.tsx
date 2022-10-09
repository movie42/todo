import React, { useEffect, useState } from "react";
import useGetTodo from "./hooks/useGetTodo";
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";

interface ITodoProps {}

const Todo = () => {
  const todoList = useGetTodo();

  return (
    <div>
      <TodoCreate />
      <TodoList todoList={todoList} />
    </div>
  );
};

export default Todo;
