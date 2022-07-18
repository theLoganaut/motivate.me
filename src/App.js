import logo from "./logo.svg";
import "./App.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import BasicNavbar from "./Components/BasicNavbar";
import PostCreator from "./Components/PostCreator";
import { Button, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listPostsWithComments } from "./graphql/queries";
import PostIterator from "./Components/PostIterator";

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
    <div>
      <Container>
        <BasicNavbar />
        <PostCreator userID={user.attributes.sub} />
        <PostIterator posts={posts} userId={user.attributes.sub} />
        <button onClick={() => console.log(posts)}>test</button>
      </Container>

      <button onClick={signOut}>signOut</button>
    </div>
  );
}

export default withAuthenticator(App);
