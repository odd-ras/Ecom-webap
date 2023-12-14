import React from "react";
import Form from "react-bootstrap/Form";
import { forwardRef } from "react";

const SignupFeatureFormGroup = forwardRef((props, ref) => {
  const { controlId, placeholder, type } = props;

  return (
    <>
      <Form.Group className="mb-3" controlId={controlId}>
        <Form.Control type={type} placeholder={placeholder} ref={ref} />
      </Form.Group>
    </>
  );
});

export default SignupFeatureFormGroup;
