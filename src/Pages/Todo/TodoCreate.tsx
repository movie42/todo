import React from "react";

interface ITodoCreateProps {}

const TodoCreate = () => {
  return (
    <div>
      <form>
        <label>내용</label>
        <input type="text" placeholder="무엇을 해야하나요?" />
        <button>할 일 만들기</button>
      </form>
    </div>
  );
};

export default TodoCreate;
