import logo from "./logo.svg";
import "./App.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import BasicNavbar from "./Components/BasicNavbar";
import PostCreator from "./Components/PostCreator";
import { Button, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "./graphql/queries";
import PostIterator from "./Components/PostIterator";

function App({ signOut, user }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getRecentPosts = async () => {
      try {
        const posts = await API.graphql(graphqlOperation(listPosts));
        setPosts(posts.data.listPosts.items);
      } catch (e) {
        console.log(e);
      }
    };

    getRecentPosts();
  }, []);

  // const handleToConfirm = async () => {
  //   try {
  //     console.log(shortId);
  //     const id = shortId;
  //     const checkEmployee = await API.graphql(
  //       graphqlOperation(getEmployee, { id: id })
  //     );
  //     const employee = checkEmployee.data;
  //     if (employee) {
  //       try {
  //         const { user } = await Auth.signUp({
  //           // new userform
  //           username: username,
  //           password: password,
  //           attributes: {
  //             email: email,
  //             "custom:sysId": eId, // optional
  //             "custom:role": role, // optional - E.164 number convention
  //           },
  //         });
  //         if (user) {
  //           setLoginViewState("confirm");
  //         }
  //       } catch (e) {
  //         console.log("error finding employee shortID:", e);
  //       }
  //     }
  //   } catch (error) {
  //     console.log("error signing up:", error);
  //   }
  // };

  return (
    // classname="App" for styling?
    <div>
      <Container>
        <BasicNavbar />
        <PostCreator userID={user.attributes.sub} />
        <PostIterator posts={posts} />
        <button onClick={() => console.log(posts)}>test</button>
      </Container>

      <button onClick={signOut}>signOut</button>
    </div>
  );
}

export default withAuthenticator(App);
