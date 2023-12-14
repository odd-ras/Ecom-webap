import React from "react";
import Button from "react-bootstrap/Button";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginFeatureButton() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const handleUserLogin = (event) => {
    event.preventDefault();
    login();

    navigate("/dashboard");
  };

  return (
    <>
      <div className="d-grid">
        <Button
          variant="warning"
          className="mb-3"
          type="submit"
          onClick={handleUserLogin}
        >
          Login
        </Button>
      </div>
    </>
  );
}
