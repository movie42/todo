import { useValidate } from "@/lib/hook";
import { useEffect } from "react";
import { useControlButtonDisabled, useRequestAuthentication } from "./hooks";
import useLocalStorage from "./hooks/useLocalStorage";
import { Container, FormContainer, FormItemWrapper } from "./Styles";
import { useNavigate } from "react-router-dom";
import { LOCAL_STORAGE_KEY } from "@/lib/Immutable/Immutable";
import { Form } from "@/Components";

const Authentication = () => {
  const navigate = useNavigate();
  const {
    email,
    setEmail,
    password,
    setPassword,
    isEmail,
    isPassword,
    setIsEmail,
    setIsPassword,
    isValidate
  } = useValidate();
  const buttonDisabled = useControlButtonDisabled({ isEmail, isPassword });
  const { handleSubmit, token } = useRequestAuthentication();
  const { setLocalStorage, getLocalStorage } = useLocalStorage();

  useEffect(() => {
    const store = getLocalStorage(LOCAL_STORAGE_KEY);
    console.log(store);
    if (store !== null) {
      if (store.hasOwnProperty("token")) {
        navigate("/todo", { replace: true });
      }
    }
  }, []);

  useEffect(() => {
    if (token) {
      setLocalStorage(LOCAL_STORAGE_KEY, { token });
      navigate("/todo", { replace: true });
    }
  }, [token]);

  return (
    <Container>
      <FormContainer>
        <Form onSubmit={(e) => handleSubmit(e, { email, password })}>
          <FormItemWrapper>
            <Form.Label>이메일</Form.Label>
            <Form.Input
              type="text"
              placeholder="이메일을 입력해주세요."
              value={email}
              onChange={(e) => {
                setEmail(e.currentTarget.value);
                const isEmail = isValidate(e.currentTarget.value, "email");

                if (isEmail) {
                  setIsEmail(true);
                } else {
                  setIsEmail(false);
                }
              }}
            />
          </FormItemWrapper>
          <FormItemWrapper>
            <Form.Label>비밀번호</Form.Label>
            <Form.Input
              type="password"
              placeholder="비밀번호를 입력해주세요."
              value={password}
              onChange={(e) => {
                setPassword(e.currentTarget.value);
                const isPassword = isValidate(
                  e.currentTarget.value,
                  "password"
                );
                if (isPassword) {
                  setIsPassword(true);
                } else {
                  setIsPassword(false);
                }
              }}
            />
          </FormItemWrapper>
          <Form.Button disabled={buttonDisabled}>로그인/회원가입</Form.Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Authentication;
