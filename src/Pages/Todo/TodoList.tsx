import React from "react";
import { UpdateTodoData } from "./hooks/useUpdateTodo";
import { Container, TodoListContainer } from "./Styles";
import TodoItemContainer from "./TodoItemContainer";

interface ITodoListProps {
  todoList: ITodoItemProps[];
  handleUpdateTodo: (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>,
    data: UpdateTodoData
  ) => Promise<void>;
  handleDelete: (id: number) => Promise<void>;
}

interface ITodoItemProps {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId?: number;
}

const TodoList = ({
  todoList,
  handleUpdateTodo,
  handleDelete
}: ITodoListProps) => {
  return (
    <Container>
      <TodoListContainer>
        {todoList.map(({ id, todo, isCompleted, userId }) => (
          <TodoItemContainer
            key={id}
            id={id}
            todo={todo}
            isCompleted={isCompleted}
            handleUpdateTodo={handleUpdateTodo}
            handleDelete={handleDelete}
          />
        ))}
      </TodoListContainer>
    </Container>
  );
};

export default TodoList;
