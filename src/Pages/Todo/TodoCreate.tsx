import { useEffect, useState } from "react";
import { Form, Label } from "@/Components";
import { useControlButtonDisabled } from "@/lib/hooks";
import { Container } from "./Styles";

interface ITodoCreateProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>, todo: string) => void;
  isSuccess: boolean;
  isError: boolean;
  error: { statusCode: number; message: string } | null;
}

const TodoCreate = ({
  isSuccess,
  onSubmit,
  isError,
  error
}: ITodoCreateProps) => {
  const [todo, setTodo] = useState("");
  const [isTodo, setIsTodo] = useState(false);
  const buttonDisabled = useControlButtonDisabled({ data: [isTodo] });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    onSubmit(e, todo);
  };

  useEffect(() => {
    if (todo) {
      setIsTodo(true);
    } else {
      setIsTodo(false);
    }
  }, [todo]);

  useEffect(() => {
    if (isSuccess) {
      setTodo("");
    }
  }, [isSuccess]);

  return (
    <Container>
      {isError && <Label>{error?.message}</Label>}
      <Form onSubmit={handleSubmit}>
        <Form.Label>내용</Form.Label>
        <Form.Input
          type="text"
          placeholder="무엇을 해야하나요?"
          value={todo}
          onChange={(e) => {
            setTodo(e.currentTarget.value);
          }}
        />
        <Form.Button disabled={buttonDisabled}>할 일 만들기</Form.Button>
      </Form>
    </Container>
  );
};

export default TodoCreate;
