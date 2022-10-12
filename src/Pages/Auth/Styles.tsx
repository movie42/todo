import { Button, Form, Label } from "@/Components";
import styled, { css, keyframes } from "styled-components";

export const AuthenticationContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 2rem;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const opacityAnimation = keyframes`
  from {
    opacity: 0;
  } 
  to{
    opacity: 1;
  }
`;

export const SignUpContainer = styled(Container)<{ isSignUp?: boolean }>`
  animation: ${opacityAnimation} 0.4s ease-in;
  h2 {
    text-align: center;
    color: ${(props) => props.theme.color.main};
    font-weight: bolder;
    line-height: 7rem;
    word-break: keep-all;
    font-size: 5rem;
    margin-bottom: 4rem;
  }

  div {
    button {
      &:not(:first-child) {
        margin-left: 1rem;
      }
    }
    button.confirm {
      width: 15rem;
      background-color: ${(props) => props.theme.color.main};
      color: #fff;
      &:hover {
        background-color: #c12d00;
      }
    }
    button.cancel {
      background-color: ${(props) => props.theme.color.gray};
      width: 15rem;
      color: #6b6b6b;
      &:hover {
        background-color: #a7a7a7;
      }
    }
  }
`;

export const SignUpButton = styled(Button)``;

export const HeadTitleContainer = styled.div<{ isSignUp?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;

  ${({ isSignUp, theme }) => {
    if (isSignUp) {
      return css`
        h1 {
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.4s linear;
        }
        p {
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.4s linear;
        }
      `;
    } else {
      return css`
        h1 {
          opacity: 1;
          word-break: keep-all;
          font-size: 15rem;
          font-weight: bolder;
          color: ${theme.color.main};
          text-align: center;
          transition: opacity 0.4s linear;
        }
        p {
          opacity: 1;
          font-size: 2rem;
          transition: opacity 0.4s linear;
        }
      `;
    }
  }}
`;

export const FormContainer = styled.div`
  box-sizing: border-box;
  padding: 0 1rem;
  width: 100%;
  max-width: 1000px;
`;

export const FormItemWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  margin: 2rem 0;
`;

export const LoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
`;

export const LoginErrorLabel = styled(Label)<{ isError?: boolean | null }>`
  display: block;
  font-size: 2rem;
  min-height: 2rem;

  ${({ isError, theme }) => {
    if (isError) {
      return css`
        opacity: 1;
        color: ${theme.color.error};
        transition: all 0.4s ease-in;
      `;
    } else {
      return css`
        opacity: 0;
        transition: all 0.4s ease-in;
      `;
    }
  }}
`;

export const LoginLabel = styled(Form.Label)`
  font-size: 1.8rem;
`;

export const LoginInput = styled(Form.Input)<{ isValidate?: boolean }>`
  border: 0;
  font-size: 2rem;
  border-bottom: 1px solid ${(props) => props.theme.color.fontBlack};
  outline: unset;
  padding: 0.8rem;

  ${({ isValidate, theme }) => {
    if (isValidate) {
      return css`
        box-sizing: border-box;
        color: ${theme.color.success};
        border: 1px solid #434343 !important;
        border-radius: 0.8rem;
        background-color: #434343;
        transition: all 0.4s ease-in-out;
      `;
    } else {
      return css`
        color: ${theme.color.fontBlack};
        transition: all 0.4s ease-in-out;
      `;
    }
  }}
`;

export const LoginButton = styled(Form.Button)`
  border: 0;
  border-radius: 1rem;
  padding: 1rem 2rem;
  font-size: 1.9rem;
  align-self: flex-end;

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
          background-color: ${theme.color.gray};
        }
      `;
    } else {
      return css`
        transition: all 0.4s ease-in-out;
        background-color: ${theme.color.gray};
      `;
    }
  }}
`;
