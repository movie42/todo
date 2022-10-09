import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useLocalStorage } from "@/lib/hooks";
import { LOCAL_STORAGE_KEY } from "@/lib/Immutable";

const Container = styled.header`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
  height: 6rem;
  color: #fff;
  background-color: black;
  padding: 1rem;

  a {
    color: white;
  }
`;

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  const { getLocalStorage } = useLocalStorage();

  useEffect(() => {
    const item = getLocalStorage(LOCAL_STORAGE_KEY);
    if (item !== null && item.token !== "") {
      setIsLogin(true);
    }
  }, [setIsLogin, getLocalStorage]);

  return (
    <Container>
      <h1>할 일이 무엇인가요?</h1>
      {isLogin && <Link to="/logout">로그아웃</Link>}
    </Container>
  );
};

export default Header;
