import { useEffect, useState } from "react";
import { Form } from "@/Components";
import styled from "styled-components";

const Container = styled.div`
  box-sizing: border-box;
  padding: 2rem;
  width: 100%;
`;

interface ITodoCreateProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>, todo: string) => void;
  isSuccess: boolean;
}

const TodoCreate = ({ isSuccess, onSubmit }: ITodoCreateProps) => {
  const [todo, setTodo] = useState("");

  useEffect(() => {
    if (isSuccess) {
      setTodo("");
    }
  }, [isSuccess]);

  return (
    <Container>
      <Form onSubmit={(e) => onSubmit(e, todo)}>
        <Form.Label>내용</Form.Label>
        <Form.Input
          type="text"
          placeholder="무엇을 해야하나요?"
          value={todo}
          onChange={(e) => {
            setTodo(e.currentTarget.value);
          }}
        />
        <Form.Button>할 일 만들기</Form.Button>
      </Form>
    </Container>
  );
};

export default TodoCreate;
