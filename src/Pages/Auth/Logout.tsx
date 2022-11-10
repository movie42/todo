import { useLocalStorage } from "@/lib/hooks";
import { LOCAL_STORAGE_KEY } from "@/lib/constants";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogoutContainer } from "./Styles";

const Logout = () => {
  const navigate = useNavigate();
  const { removeLocalStorage } = useLocalStorage();

  useEffect(() => {
    removeLocalStorage(LOCAL_STORAGE_KEY);
    const timeout = setTimeout(() => navigate("/"), 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <LogoutContainer>
      <h1>안녕히가세요 🥲</h1>
    </LogoutContainer>
  );
};

export default Logout;
