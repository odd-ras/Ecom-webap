import React from "react";
import Button from "react-bootstrap/Button";

export default function SignupFeatureButton({ handleFormSubmit }) {
  // const { login } = useAuth();

  // const navigate = useNavigate();

  // const handleUserSignup = (event) => {
  //   event.preventDefault();
  //   login({ username: "kelvin" });
  //   navigate("/dashboard");
  //   handleFormSubmit();
  // };

  return (
    <>
      <div className="d-grid">
        <Button
          variant="success"
          className="mb-3"
          type="submit"
          onClick={handleFormSubmit}
        >
          Sign Up
        </Button>
      </div>
    </>
  );
}
