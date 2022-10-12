import React, { useContext, useEffect, useState } from "react";
import { Form } from "@/Components";
import useUpdateTodo, { UpdateTodoData } from "./hooks/useUpdateTodo";
import { AppContext } from "@/lib/state";

interface ITodoEditProps {
  id: number;
  todo: string;
  isCompleted: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const TodoEdit = ({ id, todo, isCompleted, setIsEdit }: ITodoEditProps) => {
  const { setTodo } = useContext(AppContext);
  const [editTodo, setEditTodo] = useState(todo);
  const { handleUpdateTodo, isSuccess: isUpdateSuccess } = useUpdateTodo();

  const handleCancelTodoEdit = () => {
    setEditTodo(todo);
    setIsEdit(false);
  };

  const handleEditTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleUpdateTodo(e, { id, todo: editTodo, isCompleted });
    setIsEdit(false);
  };

  useEffect(() => {
    setTodo((pre) => ({ ...pre, isSuccess: false }));
  }, []);

  // TODO: 동작하지 않음 수정해야합니다
  useEffect(() => {
    if (isUpdateSuccess) {
      console.log(isUpdateSuccess);
      setTodo({ isSuccess: isUpdateSuccess });
    }
  }, [isUpdateSuccess]);

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
