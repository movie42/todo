import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.main``;

const Main = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default Main;
