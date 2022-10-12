import React from "react";
import styled from "styled-components";

const Containter = styled.button`
  cursor: pointer;
  border: 0;
  background-color: ${(props) => props.theme.color.gray100};
  border-radius: 1rem;
  font-size: 2rem;
  color: #424242;
  padding: 1rem 2rem;
`;

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ ...props }: IButtonProps) => {
  return <Containter {...props}>{props.children}</Containter>;
};

export default Button;
