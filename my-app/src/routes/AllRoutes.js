import {
  Home,
  Dashboard,
  PageNotFound,
  Login,
  Admin,
  Protected,
  SignUp,
} from "../pages/index";
import { Routes, Route } from "react-router-dom";
import Root from "../layout/Root";

import React from "react";

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="protected" element={<Protected />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="admin" element={<Admin />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}
