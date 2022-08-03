import { withAuthenticator } from "@aws-amplify/ui-react";
import MotiveCreator from "../Components/MotiveCreator";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { GetAllMotivesWithTag } from "../Controllers/Get";
import MotiveIterator from "../Components/MotiveIterator";
import Sidebar from "../Components/Sidebar";
import Explore from "../Components/Explore";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Home.css";

function Communities({ signOut, user }) {
  const [motives, setMotives] = useState([]);
  const [tags, setTags] = useState([]);
  const params = useParams();

  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    // GetRecentPosts(setMotives);
    GetAllMotivesWithTag(params["*"], setMotives);
  }, [params, refresh]);

  return (
    // classname="App" for styling?
    <Container>
      <Row className="App-top-spacing">
        <Col className="App-sidebar">
          <Sidebar signOut={signOut} />
        </Col>
        <Col style={{ minWidth: "40%" }}>
          <MotiveIterator motives={motives} userId={user.attributes.sub} />
        </Col>
        <Col>
          <Explore tags={tags} />
        </Col>
      </Row>
    </Container>
  );
}

export default withAuthenticator(Communities);
