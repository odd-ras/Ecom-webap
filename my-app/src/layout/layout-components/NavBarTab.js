import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import "../Root.css";

export default function NavBarTab({ to, children }) {
  return (
    <div>
      <Nav.Item className="root-navigation__navlink">
        <Nav.Link as={NavLink} to={to}>
          {children}
        </Nav.Link>
      </Nav.Item>
    </div>
  );
}
