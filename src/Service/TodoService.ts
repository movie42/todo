import { IHTTPClient } from "@/lib/api/api";
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
    const response = this.httpClient.get("/todo");
    return response;
  };
}

export default TodoService;
