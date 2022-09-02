import { Card } from "react-bootstrap";
import BoostIterator from "./BoostIterator";
import Motive from "./Motive";
import "../Styles/PostIterator.css";
import "../Styles/Generics.css";

const MotiveIterator = ({ motives, userId, username }) => {
  const motiveList = motives;

  return (
    <div>
      {motiveList?.map((motive) => {
        return (
          <Card
            className="main-cards"
            style={{
              marginTop: ".5em",
              borderWidth: "0px",
            }}
          >
            <Motive motive={motive} userId={userId} username={username} />

            <BoostIterator
              boosts={motive.boosts.items}
              userId={userId}
              username={username}
            />
          </Card>
        );
      })}
    </div>
  );
};

export default MotiveIterator;
