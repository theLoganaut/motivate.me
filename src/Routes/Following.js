import { withAuthenticator } from "@aws-amplify/ui-react";
import MotiveCreator from "../Components/MotiveCreator";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { GetFollowingMotives } from "../Controllers/Get";
import MotiveIterator from "../Components/MotiveIterator";
import Sidebar from "../Components/Sidebar";
import Explore from "../Components/Explore";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Home.css";
import "../Styles/Generics.css";

function Following({ signOut, user }) {
  const [motives, setMotives] = useState([]);
  const [tags, setTags] = useState([]);

  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    // if motives !empty, get following
    // else check reminder time
    GetFollowingMotives(user.username, setMotives);
  }, [refresh, user.username]);

  return (
    // classname="App" for styling?
    <Container
      className="main-container"
      fluid
      style={{ alignContent: "initial" }}
    >
      <Row className="home-top-spacing">
        <Col></Col>
        <Col className="sidebar">
          <Sidebar signOut={signOut} username={user.username} />
        </Col>
        <Col style={{ minWidth: "25%" }}>
          <MotiveIterator motives={motives} userId={user.attributes.sub} />
        </Col>
        <Col>
          <Explore tags={tags} />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default withAuthenticator(Following);
