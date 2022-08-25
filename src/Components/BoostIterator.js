import { useState, useEffect } from "react";
import Boost from "./Boost";

const BoostIterator = ({ boosts, username, userId }) => {
  const boostList = boosts;

  const [voted, setVoted] = useState(false);

  const reVote = (boostId) => {
    //delete the previous vote
    setVoted(false);
  };

  return (
    <>
      {boostList.map((boost) => {
        return <Boost boost={boost} username={username} userId={userId} />;
      })}
    </>
  );
};

export default BoostIterator;
