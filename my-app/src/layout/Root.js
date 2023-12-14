import React from "react";
import { Outlet } from "react-router-dom";
import NavBarTabs from "./layout-components/NavBarTabs";
import "./Root.css";

export default function Root() {
  return (
    <div>
      <NavBarTabs />
      <Outlet />
    </div>
  );
}
