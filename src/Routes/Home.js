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

function Home({ signOut, user }) {
  const [motives, setMotives] = useState([]);
  const [tags, setTags] = useState([]);

  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    GetRecentPosts(setMotives);
    GetTags(setTags);
  }, [refresh]);

  return (
    // classname="App" for styling?
    <Container>
      <Row className="App-top-spacing">
        <Col className="App-sidebar">
          <Sidebar signOut={signOut} username={user.username} />
        </Col>
        <Col style={{ minWidth: "40%" }}>
          <MotiveCreator
            userID={user.attributes.sub}
            setRefresh={setRefresh}
            refresh={refresh}
            tags={tags}
          />
          <MotiveIterator motives={motives} userId={user.attributes.sub} />
        </Col>
        <Col>
          <Explore tags={tags} />
        </Col>
      </Row>
    </Container>
  );
}

export default withAuthenticator(Home);
