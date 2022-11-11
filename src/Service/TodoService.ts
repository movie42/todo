import {
  IHTTPClient,
  ITodoService,
  ITokenRepository,
  Todo,
  Token
} from "@/lib/types";
import {
  CreateTodoData,
  DeleteTodoData,
  GetTodoData,
  ServerError,
  UpdateTodoData
} from "@/lib/types/types";

class TodoService implements ITodoService {
  private httpClient;
  private tokenRepository;

  constructor(
    httpClient: IHTTPClient,
    tokenRepository: ITokenRepository<Token>
  ) {
    this.httpClient = httpClient;
    this.tokenRepository = tokenRepository;
  }

  getTodo = async () => {
    const token = this.tokenRepository.getLocalStorage("WANTED_TODO_STORE");

    const response = await this.httpClient.get<GetTodoData, ServerError>({
      endPoint: "/todos",
      config: {
        headers: { Authorization: `Bearer ${token?.token}` }
      }
    });
    return response;
  };

  createTodo = async (todo: string) => {
    const token = this.tokenRepository.getLocalStorage("WANTED_TODO_STORE");
    const response = await this.httpClient.post<
      CreateTodoData,
      ServerError,
      Pick<Todo, "todo">
    >({
      endPoint: "/todos",
      data: { todo },
      config: {
        headers: { Authorization: `Bearer ${token?.token}` }
      }
    });
    return response;
  };
  updateTodo = async (todo: Omit<Todo, "userId">) => {
    const token = this.tokenRepository.getLocalStorage("WANTED_TODO_STORE");
    const response = await this.httpClient.put<
      UpdateTodoData,
      ServerError,
      Omit<Todo, "userId">
    >({
      endPoint: `/todos/${todo.id}`,
      data: { ...todo },
      config: {
        headers: { Authorization: `Bearer ${token?.token}` }
      }
    });
    return response;
  };
  deleteTodo = async (id: number) => {
    const token = this.tokenRepository.getLocalStorage("WANTED_TODO_STORE");
    const response = await this.httpClient.delete<DeleteTodoData, ServerError>({
      endPoint: `/todos/${id}`,
      config: {
        headers: { Authorization: `Bearer ${token?.token}` }
      }
    });
    return response;
  };
}

export default TodoService;
