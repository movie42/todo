import { Route, Routes } from "react-router-dom";

import { MainLayout } from "@/Components";
import { Authentication, Todo } from "@/Pages";

interface IRouterProps {}

const Router = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Authentication />} />
        <Route path="/todo" element={<Todo />} />
      </Route>
    </Routes>
  );
};

export default Router;
