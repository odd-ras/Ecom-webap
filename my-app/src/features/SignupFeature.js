import React from "react";
import SignupFeatureText from "./feature-components/SignupFeatureText";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./SignupFeature.css";
import SignupFeatureForm from "./feature-components/SignupFeatureForm";
import { useNavigate } from "react-router-dom";

import { getUsers, addUser } from "../controllers/users";

import { useAuth } from "../contexts/AuthContext";

import { useRef, useEffect, useState } from "react";

export default function SignupFeature() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("use effect");
    getUsers().then((returnedData) => {
      setUsers(returnedData);
      console.log("promise fulfilled");
    });
  }, []);
  console.log(users);

  const { signup } = useAuth();

  const navigate = useNavigate();

  const usernameInputElement = useRef();
  const emailInputElement = useRef();
  const passwordInputElement = useRef();
  const passwordConfirmationInputElement = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const userData = {
      username: usernameInputElement.current.value,
      email: emailInputElement.current.value,
      password: passwordInputElement.current.value,
      confirmPassword: passwordConfirmationInputElement.current.value,
    };

    addUser(userData).then((returnedData) => {
      setUsers(users.concat(returnedData));
    });

    signup(userData);
    navigate("/dashboard");
  };

  return (
    <>
      <Row className="justify-content-center signup-page__feature align-items-center">
        <Col lg={4} className="">
          <div className="shadow-lg p-5 mb-5 bg-body rounded">
            <SignupFeatureText />
            <SignupFeatureForm
              ref={{
                usernameInputElement,
                emailInputElement,
                passwordInputElement,
                passwordConfirmationInputElement,
              }}
              handleFormSubmit={handleFormSubmit}
            />
          </div>
        </Col>
      </Row>
    </>
  );
}
