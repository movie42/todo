import { useEffect, useState } from "react";

interface IButtonDisabledHook {
  isEmail: boolean;
  isPassword: boolean;
}

const useControlButtonDisabled = ({
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

export default useControlButtonDisabled;
