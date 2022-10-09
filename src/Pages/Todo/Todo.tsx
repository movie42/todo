import { useEffect } from "react";
import { useCreateTodo, useGetTodo, useUpdateTodo } from "./hooks";
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";

interface ITodoProps {}

const Todo = () => {
  const { todoList, getItem } = useGetTodo();
  const { handleCreateTodoContents, isSuccess: isCreateSuccess } =
    useCreateTodo();
  const { handleUpdateTodo, isSuccess: isUpdateSuccess } = useUpdateTodo();

  useEffect(() => {
    if (isCreateSuccess) {
      getItem();
    }
  }, [isCreateSuccess]);

  useEffect(() => {
    if (isUpdateSuccess) {
      getItem();
    }
  }, [isUpdateSuccess]);

  return (
    <div>
      <TodoCreate
        isSuccess={isCreateSuccess}
        onSubmit={handleCreateTodoContents}
      />
      <TodoList todoList={todoList} handleUpdateTodo={handleUpdateTodo} />
    </div>
  );
};

export default Todo;
