import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  padding: 2rem;
  width: 100%;
`;

export const TodoListContainer = styled.ul``;
export const TodoListItem = styled.li`
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;

  h3 {
    font-size: 2rem;
  }
  button {
    cursor: pointer;
    border: 0;
    background-color: unset;
    &.complete {
      color: #00ff00;
    }
    &.edit {
      color: #ffcc00;
    }
    &.delete {
      color: #ff0000;
    }
    &:hover {
      border-radius: 1rem;
      background-color: gray;
    }
  }
`;
