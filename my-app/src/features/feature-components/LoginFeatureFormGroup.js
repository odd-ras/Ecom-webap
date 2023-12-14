import React from "react";
import Form from "react-bootstrap/Form";

export default function LoginFeatureFormGroup({
  type,
  placeholder,
  controlId,
  value,
  onChange,
}) {
  return (
    <>
      <Form.Group className="mb-3" controlId={controlId}>
        <Form.Control
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </Form.Group>
    </>
  );
}
