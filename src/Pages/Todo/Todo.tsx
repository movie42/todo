import { AppContext } from "@/lib/state";
import { useContext, useEffect } from "react";
import { useGetTodo } from "./hooks";

import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";

const Todo = () => {
  const {
    todo: { isSuccess }
  } = useContext(AppContext);

  const { todoList, getItem } = useGetTodo();

  useEffect(() => {
    if (isSuccess) {
      getItem();
    }
  }, [isSuccess]);

  return (
    <div>
      <TodoCreate />
      <TodoList todoList={todoList} />
    </div>
  );
};

export default Todo;
