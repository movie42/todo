import React, { useState } from "react";
import { Form } from "@/Components";
import { UpdateTodoData } from "./hooks/useUpdateTodo";

interface ITodoEditProps {
  id: number;
  todo: string;
  isCompleted: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  handleUpdateTodo: (
    e: React.FormEvent<HTMLFormElement>,
    data: UpdateTodoData
  ) => Promise<void>;
}

const TodoEdit = ({
  id,
  todo,
  isCompleted,
  setIsEdit,
  handleUpdateTodo
}: ITodoEditProps) => {
  const [editTodo, setEditTodo] = useState(todo);

  const handleCancelTodoEdit = () => {
    setEditTodo(todo);
    setIsEdit(false);
  };

  const handleEditTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleUpdateTodo(e, { id, todo: editTodo, isCompleted });
    setIsEdit(false);
  };

  return (
    <Form onSubmit={handleEditTodo}>
      <Form.Input
        value={editTodo}
        type="text"
        onChange={(e) => setEditTodo(e.currentTarget.value)}
      />
      <Form.Button>제출</Form.Button>
      <Form.Button type="button" onClick={handleCancelTodoEdit}>
        취소
      </Form.Button>
    </Form>
  );
};

export default TodoEdit;
