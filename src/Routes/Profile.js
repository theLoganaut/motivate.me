import { withAuthenticator } from "@aws-amplify/ui-react";
import MotiveCreator from "../Components/MotiveCreator";
import { Col, Container, Row, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import { GetUserPosts } from "../Controllers/Get";
import MotiveIterator from "../Components/MotiveIterator";
import Sidebar from "../Components/Sidebar";
import Explore from "../Components/Explore";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Home.css";

function Profile({ signOut, user }) {
  const params = useParams();

  const [refresh, setRefresh] = useState(0);

  const [boostsAndMotives, setBoostsAndMotives] = useState([]);

  const [yaysAndNays, setYaysAndNays] = useState([]);

  useEffect(() => {
    GetUserPosts(params["*"], setBoostsAndMotives, setYaysAndNays);
  }, [params]);

  console.log(boostsAndMotives);

  return (
    // classname="App" for styling?
    <Container>
      <Row className="App-top-spacing">
        <Col className="App-sidebar">
          <Sidebar signOut={signOut} />
        </Col>
        <Col style={{ minWidth: "40%" }}>
          <Card style={{ minHeight: "4em" }}>
            <Card.Title>{params["*"]}</Card.Title>
            <Card.Body>Bio goes here.</Card.Body>
          </Card>
          <MotiveIterator motives={boostsAndMotives} />
        </Col>
        <Col>
          <Explore />
        </Col>
      </Row>
    </Container>
  );
}

export default withAuthenticator(Profile);
