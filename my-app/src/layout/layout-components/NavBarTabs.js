import React from "react";
import Nav from "react-bootstrap/Nav";
import NavBarTab from "./NavBarTab";
import { useAuth } from "../../contexts/AuthContext";
import NavBar from "./NavBar";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function NavBarTabs() {
  const navigate = useNavigate();

  const { isAuthenticated, logout } = useAuth();

  const handleUserLogout = (event) => {
    event.preventDefault();
    logout();
    navigate("/");
  };

  return (
    <div>
      <NavBar>
        <Nav fill variant="tabs" className="justify-content-center m-auto">
          <NavBarTab to="/">Home</NavBarTab>
          <NavBarTab to="dashboard">Dashboard</NavBarTab>
          {isAuthenticated && (
            <>
              <NavBarTab to="protected">Protected</NavBarTab>
              <NavBarTab to="admin">Admin</NavBarTab>
            </>
          )}
        </Nav>
        {isAuthenticated ? (
          <Button variant="outline-warning" onClick={handleUserLogout}>
            Logout
          </Button>
        ) : (
          <>
            <Button variant="outline-warning" onClick={() => navigate("login")}>
              Login
            </Button>
            <Button
              variant="outline-warning"
              onClick={() => navigate("signup")}
            >
              Signup
            </Button>
          </>
        )}
      </NavBar>
    </div>
  );
}
