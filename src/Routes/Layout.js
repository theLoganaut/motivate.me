import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Explore from "../Components/Explore";
import Alert from "../Components/Alert";

const Layout = ({ signOut, user }) => {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <Container
      className="main-container"
      fluid
      style={{ alignContent: "initial", overflowY: "scroll" }}
    >
      <Alert setShowAlert={setShowAlert} showAlert={showAlert} />
      <Row className="home-top-spacing">
        <Col></Col>
        <Col className="sidebar" style={{ position: "sticky", top: "1em" }}>
          <Sidebar signOut={signOut} username={user.username} />
        </Col>
        <Col style={{ minWidth: "25%" }}>
          <Outlet />
        </Col>
        <Col>
          <Explore />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default withAuthenticator(Layout);
