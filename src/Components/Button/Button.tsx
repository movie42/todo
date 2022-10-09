import React from "react";
import styled from "styled-components";

const Containter = styled.button``;

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ ...props }: IButtonProps) => {
  return <Containter {...props}>{props.children}</Containter>;
};

export default Button;
