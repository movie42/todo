import { Route, Routes } from "react-router-dom";

import { LandingLayout, MainLayout } from "@/Components";
import { Authentication, Todo, Logout } from "@/Pages";

const Router = () => {
  return (
    <Routes>
      <Route element={<LandingLayout />}>
        <Route path="/" element={<Authentication />} />
        <Route path="/logout" element={<Logout />} />
      </Route>
      <Route element={<MainLayout />}>
        <Route path="/todo" element={<Todo />} />
      </Route>
    </Routes>
  );
};

export default Router;
