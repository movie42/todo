import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const FormContainer = styled.div``;
const FormItemWrapper = styled.div``;

const Authentication = () => {
  return (
    <Container>
      <FormContainer>
        <form>
          <FormItemWrapper>
            <label>아이디</label>
            <input type="text" />
          </FormItemWrapper>
          <FormItemWrapper>
            <label>비밀번호</label>
            <input type="password" />
          </FormItemWrapper>
        </form>
      </FormContainer>
    </Container>
  );
};

export default Authentication;
