import { useValidate } from "@/lib/hook";
import { useControlButtonDisabled } from "./hooks";
import { Container, FormContainer, FormItemWrapper } from "./Styles";
import { handleSubmit } from "./utils";

const Authentication = () => {
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

  return (
    <Container>
      <FormContainer>
        <form onSubmit={(e) => handleSubmit(e, { email, password })}>
          <FormItemWrapper>
            <label>이메일</label>
            <input
              type="text"
              placeholder="이메일을 입력해주세요."
              value={email}
              onChange={(e) => {
                setEmail(e.currentTarget.value);
                const isEmail = isValidate(e.currentTarget.value, "email");
                console.log(isEmail);
                if (isEmail) {
                  setIsEmail(true);
                } else {
                  setIsEmail(false);
                }
              }}
            />
          </FormItemWrapper>
          <FormItemWrapper>
            <label>비밀번호</label>
            <input
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
          <button disabled={buttonDisabled}>로그인/회원가입</button>
        </form>
      </FormContainer>
    </Container>
  );
};

export default Authentication;
