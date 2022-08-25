import { withAuthenticator } from "@aws-amplify/ui-react";
import MotiveCreator from "../Components/MotiveCreator";
import { Col, Container, Row, Card, Tabs, Tab } from "react-bootstrap";
import { useEffect, useState } from "react";
import {
  GetFollowingMotives,
  GetOngoingMotives,
  GetUserPosts,
} from "../Controllers/Get";
import MotiveIterator from "../Components/MotiveIterator";
import Sidebar from "../Components/Sidebar";
import Explore from "../Components/Explore";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Home.css";

function Profile({ signOut, user }) {
  const params = useParams();
  let navigate = useNavigate();

  const [key, setKey] = useState("MnB");

  const [refresh, setRefresh] = useState(0);

  const [boostsAndMotives, setBoostsAndMotives] = useState([]);

  const [yaysAndNays, setYaysAndNays] = useState([]);

  useEffect(() => {
    setBoostsAndMotives([]);
    if (key === "MnB") {
      GetUserPosts(params["*"], setBoostsAndMotives);
    }
    if (key === "YaysNays") {
    }
    if (key === "following") {
      GetFollowingMotives(params["*"], setBoostsAndMotives);
    }
    if (key === "ongoing") {
      GetOngoingMotives(params["*"], setBoostsAndMotives);
    }
  }, [key, params]);

  console.log(boostsAndMotives);

  return (
    // classname="App" for styling?
    <Container
      className="main-container"
      fluid
      style={{ alignContent: "initial", overflowY: "scroll" }}
    >
      <Row className="home-top-spacing">
        <Col></Col>
        <Col className="sidebar">
          <Sidebar signOut={signOut} />
        </Col>
        <Col style={{ minWidth: "25%" }}>
          <Card style={{ minHeight: "4em" }}>
            <Card.Title>{params["*"]}</Card.Title>
            <Card.Body>Bio goes here.</Card.Body>
          </Card>
          <Tabs
            defaultActiveKey="MnB"
            id="justify-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
            justify
          >
            <Tab eventKey="MnB" title="Motives & Boosts">
              <MotiveIterator
                motives={boostsAndMotives}
                username={user.username}
              />
            </Tab>

            {/* <Tab eventKey="YaysNays" title="Yays & Nays"></Tab> */}
            <Tab eventKey="following" title="Following">
              <MotiveIterator
                motives={boostsAndMotives}
                username={user.username}
              />
            </Tab>
            <Tab eventKey="ongoing" title="Ongoing">
              <MotiveIterator
                motives={boostsAndMotives}
                username={user.username}
              />
            </Tab>
          </Tabs>
          {/* <MotiveIterator motives={boostsAndMotives} /> */}
        </Col>
        <Col>
          <Explore />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default withAuthenticator(Profile);
