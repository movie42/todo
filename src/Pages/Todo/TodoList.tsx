import { Container, TodoListContainer } from "./Styles";
import TodoItemContainer from "./TodoItemContainer";

interface ITodoListProps {
  todoList: ITodoItemProps[];
}

interface ITodoItemProps {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId?: number;
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
