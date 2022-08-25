import { useState } from "react";
import { Card } from "react-bootstrap";
import BoostIterator from "./BoostIterator";
import Motive from "./Motive";
import "../Styles/PostIterator.css";
import "../Styles/Generics.css";

const MotiveIterator = ({ motives, userId, username }) => {
  const motiveList = motives;

  const [motiveBorder, setMotiveBorder] = useState("slategray");

  console.log(motiveBorder);

  return (
    <div>
      {motiveList?.map((motive) => {
        return (
          <Card
            className="main-cards"
            style={{
              borderColor: `${motiveBorder} !important`,
              marginTop: ".5em",
            }}
          >
            <Motive
              motive={motive}
              userId={userId}
              username={username}
              setMotiveBorder={setMotiveBorder}
              motiveBorder={motiveBorder}
            />

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
