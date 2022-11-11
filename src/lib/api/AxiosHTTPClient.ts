import axios, { AxiosError } from "axios";
import { ClientProps, IHTTPClient } from "../types";

class AxiosHTTPClient implements IHTTPClient {
  private baseURL;
  private instance;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.instance = axios.create({ baseURL: this.baseURL });
  }

  get = async <TVariable>({ endPoint, config }: ClientProps<TVariable>) => {
    try {
      const response = await this.instance.get(endPoint, {
        ...config
      });
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return error;
      }
    }
  };

  post = async <TVariable>({
    endPoint,
    data,
    config
  }: ClientProps<TVariable>) => {
    try {
      const response = await this.instance.post(
        endPoint,
        { ...data },
        { ...config }
      );
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return error;
      }
    }
  };

  put = async <TVariable>({
    endPoint,
    data,
    config
  }: ClientProps<TVariable>) => {
    try {
      const response = await this.instance.put(
        endPoint,
        { ...data },
        { ...config }
      );
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return error;
      }
    }
  };
  delete = async <TVariable>({ endPoint, config }: ClientProps<TVariable>) => {
    try {
      const response = await this.instance.delete(endPoint, { ...config });
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return error;
      }
    }
  };
}

export default AxiosHTTPClient;
