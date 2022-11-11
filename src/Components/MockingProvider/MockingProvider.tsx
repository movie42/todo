import React, { ReactNode } from "react";

import { ThemeProvider } from "styled-components";

import { GlobalStyle, theme } from "@/lib/styles";
import {
  AuthContextProvider,
  ContextProvider,
  TodoContextProvider
} from "@/lib/state";
import { BrowserRouter } from "react-router-dom";

interface IMockingProviderProps {
  children: ReactNode;
}
const MockingProvider = ({ children }: IMockingProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <GlobalStyle />
        <BrowserRouter>
          <AuthContextProvider>
            <TodoContextProvider>{children} </TodoContextProvider>
          </AuthContextProvider>
        </BrowserRouter>
      </ContextProvider>
    </ThemeProvider>
  );
};

export default MockingProvider;
