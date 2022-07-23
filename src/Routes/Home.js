import { withAuthenticator } from "@aws-amplify/ui-react";
import MotiveCreator from "../Components/MotiveCreator";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { homeMotiveList } from "../graphql/queries";
import MotiveIterator from "../Components/MotiveIterator";
import Sidebar from "../Components/Sidebar";
import Explore from "../Components/Explore";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Home.css";

function App({ signOut, user }) {
  const [motives, setMotives] = useState([]);

  useEffect(() => {
    const getRecentPosts = async () => {
      try {
        const motives = await API.graphql(graphqlOperation(homeMotiveList));
        console.log(motives);
        setMotives(motives.data.listMotives.items);
      } catch (e) {
        console.log(e);
      }
    };

    getRecentPosts();
  }, []);

  return (
    // classname="App" for styling?
    <Container>
      <Row className="App-top-spacing">
        <Col className="App-sidebar">
          {/* sidebar */} <Sidebar signOut={signOut} />
        </Col>
        <Col style={{ minWidth: "40%" }}>
          {/* motives & boosts */}
          {/* <button onClick={() => console.log(posts)}>test</button> */}
          <MotiveCreator userID={user.attributes.sub} />
          <MotiveIterator motives={motives} userId={user.attributes.sub} />
        </Col>
        <Col>
          <Explore />
        </Col>
      </Row>
    </Container>
  );
}

export default withAuthenticator(App);
