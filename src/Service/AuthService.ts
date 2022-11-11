import {
  IAuthService,
  IHTTPClient,
  LoginData,
  LoginVariable,
  ServerError,
  SignUpData,
  SignUpVariable
} from "@/lib/types/types";

class AuthService implements IAuthService {
  private httpClient;

  constructor(httpClient: IHTTPClient) {
    this.httpClient = httpClient;
  }

  login = (email: string, password: string) => {
    const response = this.httpClient.post<
      LoginData,
      ServerError,
      LoginVariable
    >({
      endPoint: "/auth/signin",
      data: { email, password },
      config: {
        headers: {
          "Content-Type": "application/json"
        }
      }
    });
    return response;
  };

  signUp = (email: string, password: string) => {
    const response = this.httpClient.post<
      SignUpData,
      ServerError,
      SignUpVariable
    >({
      endPoint: "/auth/signup",
      config: {
        data: { email, password },
        headers: {
          "Content-Type": "application/json"
        }
      }
    });

    return response;
  };
}

export default AuthService;
