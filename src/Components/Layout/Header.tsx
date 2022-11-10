import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAppContext } from "@/lib/state";

const Container = styled.header`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
  height: 6rem;
  padding: 1rem 2rem;

  h1 {
    color: ${(props) => props.theme.color.main};
    font-weight: bolder;
  }
  a {
    font-size: 1.6rem;
    color: ${(props) => props.theme.color.fontBlack};
    padding: 1rem 2rem;
    &:hover {
      color: ${(props) => props.theme.color.fontWhite};
      background-color: ${(props) => props.theme.color.main};
      font-weight: bolder;
      border-radius: 0.7rem;
    }
  }
`;

const Header = () => {
  const {
    auth: { isLogin }
  } = useAppContext();

  return (
    <Container>
      <h1>지금당장</h1>
      {isLogin && <Link to="/logout">로그아웃</Link>}
    </Container>
  );
};

export default Header;
