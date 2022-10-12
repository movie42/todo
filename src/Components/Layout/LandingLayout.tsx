import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Main from "./Main";

const Container = styled.div``;

const MainLayout = () => {
  return (
    <Container>
      <Main />
    </Container>
  );
};

export default MainLayout;
