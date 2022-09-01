import { withAuthenticator } from "@aws-amplify/ui-react";
import MotiveCreator from "../Components/MotiveCreator";
import { Col, Container, Row, Card, Tabs, Tab, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import {
  GetFollowingMotives,
  GetOngoingMotives,
  GetUserPosts,
  GetUserVotes,
} from "../Controllers/Get";
import MotiveIterator from "../Components/MotiveIterator";
import Sidebar from "../Components/Sidebar";
import Explore from "../Components/Explore";
import {
  Routes,
  useNavigate,
  useParams,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Home.css";

function Profile({ signOut, user }) {
  const params = useParams();

  const [refresh, setRefresh] = useState(0);

  const [boostsAndMotives, setBoostsAndMotives] = useState([]);

  useEffect(() => {
    setBoostsAndMotives([]);
    if (params["*"] === `mnb`) {
      GetUserPosts(user.username, setBoostsAndMotives);
    }
    if (params["*"] === "votes") {
      GetUserVotes(user.username, setBoostsAndMotives);
    }
    if (params["*"] === `following`) {
      GetFollowingMotives(user.username, setBoostsAndMotives);
    }
    if (params["*"] === "ongoing") {
      GetOngoingMotives(user.username, setBoostsAndMotives);
    }
  }, [params, user.username]);

  console.log(boostsAndMotives, params["*"], params.username);

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
          <Card
            className="main-cards"
            style={{ minHeight: "4em", borderWidth: "0px" }}
          >
            <Card.Title style={{ marginLeft: ".5em", marginTop: ".5em" }}>
              {params.username}
            </Card.Title>
            <Card.Body>Bio goes here.</Card.Body>
            <Nav
              className="main-cards"
              fill
              justify
              style={{ marginRight: "0em" }}
            >
              <Nav.Item
                style={{
                  borderColor: "black",
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderRadius: "2px",
                  borderBottom: params["*"] === "mnb" ? "hidden" : "solid",
                  backgroundColor:
                    params["*"] === "mnb" ? "#F4D890" : "#F3EEC3",
                }}
              >
                <Nav.Link
                  eventKey={"MnB"}
                  as={Link}
                  to={`/profile/${user.username}/mnb`}
                >
                  M's n B's
                </Nav.Link>
              </Nav.Item>
              <Nav.Item
                style={{
                  borderColor: "black",
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderRadius: "2px",
                  borderBottom:
                    params["*"] === "following" ? "hidden" : "solid",
                  backgroundColor:
                    params["*"] === "following" ? "#F4D890" : "#F3EEC3",
                }}
              >
                <Nav.Link
                  eventKey={"following"}
                  as={Link}
                  to={`/profile/${user.username}/following`}
                >
                  Following
                </Nav.Link>
              </Nav.Item>
              <Nav.Item
                style={{
                  borderColor: "black",
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderRadius: "2px",
                  borderBottom: params["*"] === "ongoing" ? "hidden" : "solid",
                  backgroundColor:
                    params["*"] === "ongoing" ? "#F4D890" : "#F3EEC3",
                }}
              >
                <Nav.Link
                  eventKey={"ongoing"}
                  as={Link}
                  to={`/profile/${user.username}/ongoing`}
                >
                  Ongoing
                </Nav.Link>
              </Nav.Item>
              <Nav.Item
                style={{
                  borderColor: "black",
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderRadius: "2px",
                  borderBottom: params["*"] === "votes" ? "hidden" : "solid",
                  backgroundColor:
                    params["*"] === "votes" ? "#F4D890" : "#F3EEC3",
                }}
              >
                <Nav.Link
                  eventKey={"ongoing"}
                  as={Link}
                  to={`/profile/${user.username}/votes`}
                >
                  Votes
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card>

          <MotiveIterator motives={boostsAndMotives} username={user.username} />
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
