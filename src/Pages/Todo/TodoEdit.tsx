import React, { useEffect, useState } from "react";
import { Form } from "@/Components";
import { useAppContext } from "@/lib/state";
import { useUpdateTodo } from "./hooks";

interface ITodoEditProps {
  id: number;
  todo: string;
  isCompleted: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const TodoEdit = ({ id, todo, isCompleted, setIsEdit }: ITodoEditProps) => {
  const { setTodo } = useAppContext();
  const [editTodo, setEditTodo] = useState(todo);
  const { handleUpdateTodo, isSuccess } = useUpdateTodo();

  const handleCancelTodoEdit = () => {
    setEditTodo(todo);
    setIsEdit(false);
  };

  const handleEditTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleUpdateTodo(e, { id, todo: editTodo, isCompleted });
  };

  useEffect(() => {
    if (isSuccess) {
      setTodo((pre) => ({ ...pre, isSuccess }));
      setIsEdit(false);
    } else {
      setTodo((pre) => ({ ...pre, isSuccess: false }));
    }
  }, [isSuccess]);

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
