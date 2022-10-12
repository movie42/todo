import { Route, Routes } from "react-router-dom";

import { LandingLayout, MainLayout } from "@/Components";
import { Authentication, Todo, Logout } from "@/Pages";

interface IRouterProps {}

const Router = () => {
  return (
    <Routes>
      <Route element={<LandingLayout />}>
        <Route path="/" element={<Authentication />} />
      </Route>
      <Route element={<MainLayout />}>
        <Route path="/todo" element={<Todo />} />
      </Route>
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
};

export default Router;
