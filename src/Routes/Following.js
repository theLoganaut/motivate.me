import { withAuthenticator } from "@aws-amplify/ui-react";
import { useEffect, useState } from "react";
import { GetFollowingMotives } from "../Controllers/Get";
import MotiveIterator from "../Components/MotiveIterator";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Home.css";
import "../Styles/Generics.css";

function Following({ user }) {
  const [motives, setMotives] = useState([]);

  useEffect(() => {
    GetFollowingMotives(user.username, setMotives);
  }, [user.username]);

  return (
    <MotiveIterator
      motives={motives}
      userId={user.attributes.sub}
      username={user.username}
    />
  );
}

export default withAuthenticator(Following);
