import { IHTTPClient } from "@/lib/api/axiosApiClient";
import { AxiosError, AxiosResponse } from "axios";

interface ITodoService {
  getTodo: () => Promise<
    AxiosResponse<any, any> | AxiosError<any, any> | undefined
  >;
}

class TodoService implements ITodoService {
  private httpClient;
  constructor(httpClient: IHTTPClient) {
    this.httpClient = httpClient;
  }

  getTodo = () => {
    const response = this.httpClient.fetch({
      endPoint: "/todo",
      config: { method: "GET" }
    });
    return response;
  };
}

export default TodoService;
