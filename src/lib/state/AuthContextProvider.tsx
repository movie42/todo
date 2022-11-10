import React, { createContext, ReactNode, useContext } from "react";
import AuthService, { IAuthService } from "@/Service/AuthService";
import AxiosHTTPClient from "../api/axiosApiClient";
import { BASE_URL } from "../constants";

const AuthContext = createContext<IAuthService>(null!);

const httpClient = new AxiosHTTPClient(BASE_URL);
const authService = new AuthService(httpClient);

export const useAuthContext = () => useContext(AuthContext);

interface IAuthContextProps {
  children: ReactNode;
}

const AuthContextProvider = ({ children }: IAuthContextProps) => {
  return <AuthContext.Provider value={authService} children={children} />;
};

export default AuthContextProvider;
