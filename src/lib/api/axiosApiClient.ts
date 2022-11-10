import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

interface ClientProps {
  endPoint: string;
  config: AxiosRequestConfig;
}

interface ServerError {
  statusCode: number;
  message: string;
  error: string;
}
export type ClientReturnType = Promise<
  AxiosResponse | AxiosError<ServerError> | undefined
>;

export interface IHTTPClient {
  fetch: ({ endPoint, config }: ClientProps) => ClientReturnType;
}

class AxiosHTTPClient implements IHTTPClient {
  private baseURL;
  private instance;
  private config;

  constructor(baseURL: string, config?: AxiosRequestConfig) {
    this.baseURL = baseURL;
    this.config = config;
    this.instance = axios.create({ baseURL: this.baseURL, ...this.config });
  }

  fetch = async ({ endPoint, config }: ClientProps) => {
    try {
      const response = await this.instance(endPoint, {
        ...config
      });
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return error;
      }
    }
  };
}

export default AxiosHTTPClient;
