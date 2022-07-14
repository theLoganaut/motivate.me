import logo from "./logo.svg";
import "./App.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import BasicNavbar from "./Components/BasicNavbar";
import PostCreator from "./Components/PostCreator";
import { Container } from "react-bootstrap";

function App({ signOut, user }) {
  console.log(user);

  return (
    // classname="App" for styling?
    <div>
      <Container>
        <BasicNavbar />
        <PostCreator userID={user.attributes.sub} />
      </Container>

      <button onClick={signOut}>signOut</button>
    </div>
  );
}

export default withAuthenticator(App);
