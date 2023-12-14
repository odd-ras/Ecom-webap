import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginFeatureText from "./feature-components/LoginFeatureText";
import LoginFeatureForm from "./feature-components/LoginFeatureForm";
import LoginFeatureButton from "./feature-components/LoginFeatureButton";
import "./LoginFeature.css";

export default function LoginFeature() {
  return (
    <>
      <Row className="justify-content-center login-page__feature align-items-center">
        <Col lg={4} className="">
          <div className="shadow-lg p-5 mb-5 bg-body rounded">
            <LoginFeatureText />
            <LoginFeatureForm />
            <LoginFeatureButton />
          </div>
        </Col>
      </Row>
    </>
  );
}
