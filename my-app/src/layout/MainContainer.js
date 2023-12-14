import React from "react";
import Container from "react-bootstrap/Container";
import "./MainContainer.css";

export default function MainContainer({ children }) {
  return (
    <>
      <Container fluid className="bg-light main-container">
        {children}
      </Container>
    </>
  );
}
