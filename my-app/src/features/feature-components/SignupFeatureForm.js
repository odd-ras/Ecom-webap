import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SignupFeatureForm = React.forwardRef(({ handleFormSubmit }, ref) => {
  const {
    usernameInputElement,
    emailInputElement,
    passwordInputElement,
    passwordConfirmationInputElement,
  } = ref;

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Control
            type="text"
            placeholder="Username"
            ref={usernameInputElement}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Control
            type="email"
            placeholder="Email"
            ref={emailInputElement}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            ref={passwordInputElement}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPasswordConfirmation">
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            ref={passwordConfirmationInputElement}
          />
        </Form.Group>
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
      </Form>
    </>
  );
});

export default SignupFeatureForm;
