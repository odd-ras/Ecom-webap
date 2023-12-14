import React from "react";
import Form from "react-bootstrap/Form";
import LoginFeatureFormGroup from "./LoginFeatureFormGroup";
import { useAuth } from "../../contexts/AuthContext";

export default function LoginFeatureForm() {
  const { userData, handleUsernameEntry, handlePasswordEntry } = useAuth();

  return (
    <>
      <Form>
        <LoginFeatureFormGroup
          controlId="formUsername"
          type="text"
          placeholder="Username"
          value={userData.username}
          onChange={handleUsernameEntry}
        />
        <LoginFeatureFormGroup
          controlId="formPassword"
          type="password"
          placeholder="Password"
          value={userData.email}
          onChange={handlePasswordEntry}
        />
      </Form>
    </>
  );
}
