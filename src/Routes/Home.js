import { withAuthenticator } from "@aws-amplify/ui-react";
import MotiveCreator from "../Components/MotiveCreator";
import { useEffect, useState } from "react";
import { GetRecentPosts, GetTags } from "../Controllers/Get";
import MotiveIterator from "../Components/MotiveIterator";
import "bootstrap/dist/css/bootstrap.min.css";

function Home({ user }) {
  const [motives, setMotives] = useState([]);
  const [tags, setTags] = useState([]);

  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    GetRecentPosts(setMotives);
    GetTags(setTags);
  }, [refresh]);

  return (
    // classname="App" for styling?
    <div fluid style={{ alignContent: "initial" }}>
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
    </div>
  );
}

export default withAuthenticator(Home);
