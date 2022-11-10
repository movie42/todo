import React, { createContext, useContext } from "react";
import AuthService, { IAuthService } from "@/Service/AuthService";
import AxiosHTTPClient from "../api/axiosApiClient";
import { BASE_URL } from "../Immutable";

const AuthContext = createContext<IAuthService>(null!);

const httpClient = new AxiosHTTPClient(BASE_URL);
const authService = new AuthService(httpClient);

export const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider = () => {
  return <AuthContext.Provider value={authService}></AuthContext.Provider>;
};

export default AuthContextProvider;
