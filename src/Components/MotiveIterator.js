import { useState } from "react";
import { Card } from "react-bootstrap";
import BoostIterator from "./BoostIterator";
import Motive from "./Motive";
import "../Styles/PostIterator.css";

const MotiveIterator = ({ motives, userId }) => {
  const motiveList = motives;

  return (
    <div>
      {motiveList?.map((motive) => {
        return (
          <Card
            style={{
              marginRight: "1em",
              background: "#dee2e6",
              display: "flex",
            }}
          >
            <Motive motive={motive} userId={userId} username={motive.owner} />

            <BoostIterator boosts={motive.boosts.items} />
          </Card>
        );
      })}
    </div>
  );
};

export default MotiveIterator;
