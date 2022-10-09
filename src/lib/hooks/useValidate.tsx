import { useState } from "react";
import { REG_EXP } from "../Immutable";

const useValidate = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const isValidate = (value: string, type: "email" | "password") => {
    if (type === "email") {
      const isEmail = value.match(REG_EXP.email);
      return isEmail !== null ? true : false;
    }

    if (type === "password") {
      const isPassword = value.match(REG_EXP.password);
      return isPassword !== null ? true : false;
    }

    return false;
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    isEmail,
    setIsEmail,
    isPassword,
    setIsPassword,
    isValidate
  };
};

export default useValidate;
