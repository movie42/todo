import React, { createContext, ReactNode, useContext } from "react";
import { AuthService } from "@/Service";
import { AxiosHTTPClient } from "../api";
import { BASE_URL } from "../constants";
import { IAuthService } from "../types/types";

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
