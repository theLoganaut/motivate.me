import { useState, useEffect } from "react";
import { Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FollowMotive } from "../Controllers/Create";
import BoostCreator from "./BoostCreator";

const Motive = ({ motive, userId, username, setMotiveBorder }) => {
  const [showBoostCreator, setShowBoostCreator] = useState(false);

  let currentTime = new Date().toISOString();

  let motiveCalendarTime = new Date(motive.reminderTime).toLocaleDateString();

  let motiveClockTime = new Date(motive.reminderTime).toLocaleTimeString();

  const expandContractBoost = () => {
    setShowBoostCreator((showBoostCreator) => !showBoostCreator);
  };

  const [sameUser, setSameUser] = useState(false);

  const [alreadyFollowing, setAlreadyFollowing] = useState(false);

  const [alreadyBoosted, setAlreadyBoosted] = useState(false);

  useEffect(() => {
    let followingList = motive.following.items.map((item) => item.owner);
    let boostedList = motive.boosts.items.map((item) => item.owner);
    if (boostedList.includes(username)) {
      setAlreadyBoosted(true);
    }
    if (followingList.includes(username)) {
      setAlreadyFollowing(true);
    }
    if (motive.owner === username) {
      setSameUser(true);
    }
  }, [
    motive.boosts.items,
    motive.complete,
    motive.completed,
    motive.following.items,
    motive.owner,
    motive.reminderTime,
    username,
  ]);

  return (
    <Card
      style={{
        borderWidth: "2px",
        borderColor:
          motive.reminderTime <= currentTime && !motive.complete
            ? "red"
            : motive.complete
            ? "green"
            : "hidden",
        marginRight: "0px",
      }}
      className="main-cards"
    >
      <Col style={{ display: "flex" }}>
        <Col style={{ marginLeft: ".2em" }}>
          <div>
            <Link to={`/Profile/${motive.owner}`}>{motive.owner}</Link>
          </div>

          <Link to={`/Communities/${motive.tag?.name}`}>
            {motive.tag?.name}
          </Link>
        </Col>

        <Card.Body>{motive.content} </Card.Body>

        {
          // make this if username is the username on the motive, you dont see the boost button
        }
        {alreadyFollowing || sameUser ? (
          <div>
            {motiveCalendarTime}
            <br />
            {motiveClockTime}
          </div>
        ) : (
          <Button
            size="sm"
            className="buttons"
            onClick={() => {
              FollowMotive(userId, motive.id, motive.reminderTime);
            }}
          >
            {" "}
            Follow? <br />
            {motiveCalendarTime}
            <br />
            {motiveClockTime}
          </Button>
        )}

        {sameUser || alreadyBoosted ? (
          <></>
        ) : (
          <Button size="sm" onClick={expandContractBoost} className="buttons">
            {showBoostCreator ? <>⬆</> : <>⬇</>}
          </Button>
        )}
      </Col>
      <div className="expand-container">
        <Card.Body
          className={
            showBoostCreator
              ? "expand-contract expanded"
              : "expand-contract collapsed"
          }
        >
          <BoostCreator
            motiveId={motive.id}
            userId={userId}
            expandContractBoost={expandContractBoost}
          />
        </Card.Body>
      </div>
    </Card>
  );
};

export default Motive;
