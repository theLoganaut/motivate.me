import { withAuthenticator } from "@aws-amplify/ui-react";
import MotiveCreator from "../Components/MotiveCreator";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { GetRecentPosts, GetTags } from "../Controllers/Get";
import MotiveIterator from "../Components/MotiveIterator";
import Sidebar from "../Components/Sidebar";
import Explore from "../Components/Explore";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Home.css";
import "../Styles/Generics.css";

function Home({ signOut, user }) {
  const melon = "#FF9F85";
  const lightyellow = "#F3EEC3";
  const yellow = "#F4D890";
  const muteRed = "#C08497";
  const babyBlue = "#A4C8CC";
  const [motives, setMotives] = useState([]);
  const [tags, setTags] = useState([]);

  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    GetRecentPosts(setMotives);
    GetTags(setTags);
  }, [refresh]);

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
          <Sidebar signOut={signOut} username={user.username} />
        </Col>
        <Col style={{ minWidth: "25%" }}>
          <MotiveCreator
            userID={user.attributes.sub}
            setRefresh={setRefresh}
            refresh={refresh}
            tags={tags}
          />
          <MotiveIterator
            motives={motives}
            userId={user.attributes.sub}
            username={user.username}
          />
        </Col>
        <Col>
          <Explore tags={tags} />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default withAuthenticator(Home);
