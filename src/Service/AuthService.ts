import { ClientReturnType, IHTTPClient } from "@/lib/api/axiosApiClient";

export interface IAuthService {
  login: (email: string, password: string) => ClientReturnType;
  signUp: (email: string, password: string) => ClientReturnType;
}

class AuthService implements IAuthService {
  private httpClient;

  constructor(httpClient: IHTTPClient) {
    this.httpClient = httpClient;
  }

  login = (email: string, password: string) => {
    const response = this.httpClient.fetch({
      endPoint: "/auth/signin",
      config: { method: "POST", data: { email, password } }
    });
    return response;
  };

  signUp = (email: string, password: string) => {
    const response = this.httpClient.fetch({
      endPoint: "/auth/signup",
      config: { method: "POST", data: { email, password } }
    });

    return response;
  };
}

export default AuthService;
