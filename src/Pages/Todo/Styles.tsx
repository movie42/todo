import { Form } from "@/Components";
import styled, { css } from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  padding: 2rem;
  width: 100%;
`;

export const TodoContainer = styled.div`
  margin: 0 auto;
  max-width: 1020px;
`;

export const TodoCreateContainer = styled(Container)`
  form {
    display: grid;
    grid-template-columns: 8fr 2fr;
    @media (max-width: 1000px) {
      display: flex;
      flex-direction: column;
    }
  }
`;
export const TodoFormItemContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 9fr;
  box-sizing: border-box;
  @media (max-width: 1000px) {
    display: unset;
    margin-bottom: 1rem;
  }
`;
export const TodoInput = styled(Form.Input)`
  box-sizing: border-box;
  padding: 1rem;
  font-size: 1.7rem;
  border: 0;
  border-bottom: 1px solid ${(props) => props.theme.color.gray100};
  width: 100%;
`;
export const TodoLabel = styled(Form.Label)`
  padding: 1rem;
  font-size: 1.7rem;
`;
export const TodoButton = styled(Form.Button)<{ disabled?: boolean }>`
  border: 0;
  border-radius: 1rem;
  padding: 1rem 2rem;
  font-size: 1.7rem;
  align-self: flex-end;
  margin-left: 0.8rem;

  ${({ disabled, theme }) => {
    if (!disabled) {
      return css`
        color: ${theme.color.fontWhite};
        background-color: ${theme.color.main};

        &:hover {
          color: ${theme.color.fontWhite};
          background-color: #c40000;
        }

        &:active {
          color: ${theme.color.main};
          background-color: ${theme.color.gray100};
        }
      `;
    } else {
      return css`
        cursor: unset;
        transition: all 0.4s ease-in-out;
        background-color: ${theme.color.gray100};
      `;
    }
  }}
`;

export const TodoListContainer = styled.ul``;

export const TodoListItem = styled.li<{ isEdit?: boolean }>`
  display: grid;
  grid-template-columns: 0.5fr 7fr 1.5fr 1.5fr;
  margin-bottom: 2rem;
  height: 4rem;
  align-items: center;

  ${({ isEdit }) => {
    if (isEdit) {
      return css`
        display: block;
        form {
          display: grid;
          grid-template-columns: 7fr 1.5fr 1.5fr;
          input {
            border: 0;
            font-size: 1.7rem;
            border-bottom: 1px solid ${(props) => props.theme.color.gray100};
            width: 100%;
          }
          button {
            font-size: 1.7rem;
            cursor: pointer;
            border: 0;
            border-radius: 0.8rem;
            background-color: unset;
            padding: 0.8rem 0;
            &:hover {
              background-color: ${(props) => props.theme.color.gray200};
              color: ${(props) => props.theme.color.fontWhite};
            }
            &:not(:first-child) {
              margin-left: 1rem;
            }
          }
        }
      `;
    }
  }}

  h3 {
    font-size: 1.7rem;
  }

  button {
    font-size: 1.7rem;
    cursor: pointer;
    border: 0;
    border-radius: 0.8rem;
    background-color: unset;
    padding: 0.8rem 0;
    &:not(:first-child) {
      margin-left: 1rem;
    }

    &.complete {
      height: 20px;
      width: 20px;
      border: 2px solid ${(props) => props.theme.color.gray200};
      background-color: ${(props) => props.theme.color.success};
      &:hover {
        background-color: ${(props) => props.theme.color.warning};
        color: ${(props) => props.theme.color.fontWhite};
      }
    }
    &.complete-unset {
      height: 20px;
      width: 20px;
      border: 2px solid ${(props) => props.theme.color.gray200};
      &:hover {
        background-color: ${(props) => props.theme.color.success};
        border: 2px solid ${(props) => props.theme.color.gray200};
      }
    }
    &.edit {
      border: 1px solid ${(props) => props.theme.color.warning};
      color: ${(props) => props.theme.color.warning};
      &:hover {
        background-color: ${(props) => props.theme.color.warning};
        color: ${(props) => props.theme.color.fontWhite};
      }
    }
    &.delete {
      border: 1px solid ${(props) => props.theme.color.error};
      color: ${(props) => props.theme.color.error};
      &:hover {
        background-color: ${(props) => props.theme.color.error};
        color: ${(props) => props.theme.color.fontWhite};
      }
    }
  }
`;
