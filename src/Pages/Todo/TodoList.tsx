import { Todo } from "@/lib/types";
import { Container, TodoListContainer } from "./Styles";
import TodoItemContainer from "./TodoItemContainer";

interface ITodoListProps {
  todoList: Todo[];
}

const TodoList = ({ todoList }: ITodoListProps) => {
  return (
    <Container>
      <TodoListContainer>
        {todoList.map(({ id, todo, isCompleted }) => (
          <TodoItemContainer
            key={id}
            id={id}
            todo={todo}
            isCompleted={isCompleted}
          />
        ))}
      </TodoListContainer>
    </Container>
  );
};

export default TodoList;
