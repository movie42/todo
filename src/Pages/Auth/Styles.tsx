import { Form } from "@/Components";
import styled, { css } from "styled-components";

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
  justify-content: center;
  align-items: center;
`;

export const HeadTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    word-break: keep-all;
    font-size: 20rem;
    font-weight: bolder;
    color: ${(props) => props.theme.color.main};
    text-align: center;
  }
  p {
    font-size: 2rem;
  }
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

export const LoginLabel = styled(Form.Label)`
  font-size: 1.8rem;
`;

export const LoginInput = styled(Form.Input)<{ isValidate?: boolean }>`
  width: 100%;
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
        transition: all 0.6s ease-in-out;
        border: 1px solid #434343 !important;
        border-radius: 0.8rem;
        background-color: #434343;
      `;
    } else {
      return css`
        color: ${theme.color.fontBlack};
        transition: all 0.6s ease-in-out;
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
        transition: all 0.6s ease-in-out;
        background-color: ${theme.color.gray};
      `;
    }
  }}
`;
