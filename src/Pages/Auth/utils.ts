import axios, { AxiosError } from "axios";

interface AuthenticationFormValue {
  email: string;
  password: string;
}

export const handleSignup = async ({
  email,
  password
}: AuthenticationFormValue) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/auth/signup",
      { email, password },
      { headers: { "Content-Type": "application/json" } }
    );

    if (response.status === 404) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    const responseError = error as AxiosError<{
      statusCode: number;
      message: string;
    }>;

    return responseError;
  }
};

export const handleSignin = async ({
  email,
  password
}: AuthenticationFormValue) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/auth/signin",
      { email, password },
      { headers: { "Content-Type": "application/json" } }
    );

    if (response.status === 404) {
      throw new Error();
    }

    return response.data;
    return;
  } catch (error) {
    const responseError = error as AxiosError<{
      statusCode: number;
      message: string;
    }>;

    if (responseError.response?.data?.statusCode === 401) {
      return { statusCode: 401, message: "패스워드를 다시 확인해보세요." };
    }

    return responseError.response?.data;
  }
};

export const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  { email, password }: AuthenticationFormValue
) => {
  e.preventDefault();

  const signin = await handleSignin({ email, password });

  if (signin?.access_token) {
    console.log("success");
    return;
  }

  if (signin?.message === "해당 사용자가 존재하지 않습니다.") {
  }
  return;
};
