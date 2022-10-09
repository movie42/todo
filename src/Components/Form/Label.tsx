import React from "react";
import styled from "styled-components";

const Container = styled.label``;

interface ILabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = ({ ...props }: ILabelProps) => {
  return <Container {...props}>{props.children}</Container>;
};

export default Label;
