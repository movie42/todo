import { AppContext } from "@/lib/state";
import { useContext, useEffect } from "react";
import { useGetTodo } from "./hooks";
import { TodoContainer } from "./Styles";

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
    <TodoContainer>
      <TodoCreate />
      <TodoList todoList={todoList} />
    </TodoContainer>
  );
};

export default Todo;
