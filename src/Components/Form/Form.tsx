import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import Input from "./Input";
import Label from "./Label";

const Container = styled.form`
  button {
    border: 0;
    border-radius: 1rem;
    padding: 0.8rem 0.7rem;
    font-size: 1.7rem;
  }
  label {
    font-size: 1.7rem;
  }
  input {
    width: 100%;
    border: 0;
    font-size: 2rem;
    border-bottom: 1px solid ${(props) => props.theme.color.fontColor};
  }
`;

interface IFormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

const Form = ({ ...props }: IFormProps) => {
  return <Container {...props}>{props.children}</Container>;
};

Form.Input = Input;
Form.Label = Label;
Form.Button = Button;

export default Form;
