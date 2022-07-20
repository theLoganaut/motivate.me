import { withAuthenticator } from "@aws-amplify/ui-react";
import PostCreator from "../Components/PostCreator";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listPostsWithComments } from "../graphql/queries";
import PostIterator from "../Components/PostIterator";
import Sidebar from "../Components/Sidebar";
import Explore from "../Components/Explore";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Home.css";

function App({ signOut, user }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getRecentPosts = async () => {
      try {
        const posts = await API.graphql(
          graphqlOperation(listPostsWithComments)
        );
        setPosts(posts.data.listPosts.items);
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
          <PostCreator userID={user.attributes.sub} />
          <PostIterator posts={posts} userId={user.attributes.sub} />
        </Col>
        <Col>
          <Explore />
        </Col>
      </Row>
    </Container>
  );
}

export default withAuthenticator(App);
