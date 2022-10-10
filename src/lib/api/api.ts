import { BASE_URL } from "@/lib/Immutable/Immutable";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export const instance = axios.create({
  baseURL: BASE_URL
});

interface IAPIValue {
  url: string;
  token?: string;
  config?: AxiosRequestConfig;
}

interface IAPIPostValue<TData, TError> extends IAPIValue {
  data: TData;
}

interface IAPIPutValue<T> extends IAPIValue {
  data: T;
}

interface IAPIDeleteValue extends IAPIValue {}

export const getData = async ({ url, token, config }: IAPIValue) => {
  try {
    const response = await instance.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      ...config
    });

    return response.data;
  } catch (error) {
    const responseError = error as AxiosError<{
      statusCode: number;
      message: string;
    }>;
    return responseError;
  }
};

export const postData = async <TData, TError extends unknown>({
  url,
  data,
  token,
  config
}: IAPIPostValue<TData, TError>) => {
  try {
    const response = await instance.post(url, data, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      ...config
    });

    return response.data;
  } catch (error) {
    const responseError = error as AxiosError<TError>;

    return responseError;
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

    return response;
  } catch (error) {
    const responseError = error as AxiosError<{
      statusCode: number;
      message: string;
    }>;

    return responseError;
  }
};

export const deleteData = async ({ url, token, config }: IAPIDeleteValue) => {
  try {
    const response = await instance.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      ...config
    });

    return { status: response.status };
  } catch (error) {
    const responseError = error as AxiosError<{
      statusCode: number;
      message: string;
    }>;

    return responseError;
  }
};
