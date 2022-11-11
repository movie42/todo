import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GlobalStyle, theme } from "@/lib/styles";
import {
  ContextProvider,
  AuthContextProvider,
  TodoContextProvider
} from "@/lib/state";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <GlobalStyle />
        <BrowserRouter>
          <AuthContextProvider>
            <TodoContextProvider>
              <App />
            </TodoContextProvider>
          </AuthContextProvider>
        </BrowserRouter>
      </ContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
