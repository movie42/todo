import { useEffect, useState } from "react";
import { usePostTodo } from "./hooks";
import useGetTodo from "./hooks/useGetTodo";
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";

interface ITodoProps {}

const Todo = () => {
  const { todoList, getItem } = useGetTodo();
  const { handleCreateTodoContents, isSuccess } = usePostTodo();

  useEffect(() => {
    if (isSuccess) {
      getItem();
    }
  }, [isSuccess]);

  return (
    <div>
      <TodoCreate isSuccess={isSuccess} onSubmit={handleCreateTodoContents} />
      <TodoList todoList={todoList} />
    </div>
  );
};

export default Todo;
