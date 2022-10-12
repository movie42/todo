import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import Input from "./Input";
import Label from "./Label";

const Container = styled.form``;

interface IFormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

const Form = ({ ...props }: IFormProps) => {
  return <Container {...props}>{props.children}</Container>;
};

Form.Input = Input;
Form.Label = Label;
Form.Button = Button;

export default Form;
