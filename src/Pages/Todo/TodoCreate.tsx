import { useContext, useEffect, useState } from "react";
import { Form, Label } from "@/Components";
import { useControlButtonDisabled } from "@/lib/hooks";
import { Container } from "./Styles";
import { useCreateTodo } from "./hooks";
import { AppContext } from "@/lib/state";

const TodoCreate = () => {
  const { setTodo: setContextTodo } = useContext(AppContext);
  const { handleCreateTodoContents, isSuccess, isError, error } =
    useCreateTodo();

  const [todo, setTodo] = useState("");
  const [isTodo, setIsTodo] = useState(false);
  const buttonDisabled = useControlButtonDisabled({ data: [isTodo] });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    handleCreateTodoContents(e, todo);
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
      setContextTodo((pre) => ({ ...pre, isSuccess }));
    } else {
      setContextTodo((pre) => ({ ...pre, isSuccess: false }));
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
