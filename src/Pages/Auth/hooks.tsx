import axios from "axios";
import { useEffect, useState } from "react";

interface IButtonDisabledHook {
  isEmail: boolean;
  isPassword: boolean;
}

export const useControlButtonDisabled = ({
  isEmail,
  isPassword
}: IButtonDisabledHook) => {
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (isEmail && isPassword) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [isEmail, isPassword]);

  return buttonDisabled;
};
