import { BASE_URL } from "@/lib/Immutable/Immutable";
import axios, { AxiosError, AxiosRequestConfig } from "axios";

export const instance = axios.create({
  baseURL: BASE_URL
});

interface IAPIValue {
  url: string;
  token?: string;
  config?: AxiosRequestConfig;
}

interface IAPIPostValue<T> extends IAPIValue {
  data: T;
}

interface IAPIPutValue<T> extends IAPIValue {
  data: T;
}

export const getData = async ({ url, token, config }: IAPIValue) => {
  try {
    const response = await instance.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      ...config
    });

    if (response.status >= 400) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    const responseError = error as AxiosError<{
      statusCode: number;
      message: string;
    }>;
    return { responseError };
  }
};

export const postData = async <T extends unknown>({
  url,
  data,
  token,
  config
}: IAPIPostValue<T>) => {
  try {
    const response = await instance.post(url, data, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      ...config
    });

    if (response.status >= 400) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    const responseError = error as AxiosError<{
      statusCode: number;
      message: string;
    }>;

    return responseError?.response?.data;
  }
};

export const putData = async <T extends unknown>({
  url,
  data,
  token,
  config
}: IAPIPutValue<T>) => {
  try {
    const response = await instance.put(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      ...config
    });

    if (response.status >= 400) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    const responseError = error as AxiosError<{
      statusCode: number;
      message: string;
    }>;

    return responseError?.response?.data;
  }
};
