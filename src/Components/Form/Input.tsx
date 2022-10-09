import React from "react";
import styled from "styled-components";

const Container = styled.input``;

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...props }: IInputProps) => {
  return <Container {...props} />;
};

export default Input;
