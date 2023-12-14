import React from "react";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar({ children }) {
  return (
    <>
      <Navbar expand="lg" className="bg-dark">
        {children}
      </Navbar>
    </>
  );
}
