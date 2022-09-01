import { useState, useEffect } from "react";
import { Col, Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FollowMotive } from "../Controllers/Create";
import BoostCreator from "./BoostCreator";

const Motive = ({ motive, userId, username, setMotiveBorder }) => {
  const [showBoostCreator, setShowBoostCreator] = useState(false);

  const expandContractBoost = () => {
    setShowBoostCreator((showBoostCreator) => !showBoostCreator);
  };

  const [sameUser, setSameUser] = useState(false);

  const [alreadyFollowing, setAlreadyFollowing] = useState(false);

  useEffect(() => {
    let followingList = motive.following.items.map((item) => item.owner);
    if (followingList.includes(username)) {
      setAlreadyFollowing(true);
    }
    if (motive.owner === username) {
      setSameUser(true);
    }
    if (motive.owner !== username) {
      setSameUser(false);
    }
    let currentTime = new Date().toISOString();

    if (motive.completed === true) {
      setMotiveBorder("green");
    }
    if (motive.reminderTime <= currentTime && motive.complete !== true) {
      setMotiveBorder("red");
      console.log(":why no red");
    }
  }, [
    motive.complete,
    motive.completed,
    motive.following.items,
    motive.owner,
    motive.reminderTime,
    setMotiveBorder,
    username,
  ]);

  // console.log(motive.owner, username, sameUser, alreadyFollowing);
  // console.log(motive.following.items);

  return (
    <div>
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
          <div>{motive.reminderTime}</div>
        ) : (
          <Button
            size="sm"
            onClick={() => {
              FollowMotive(userId, motive.id, motive.reminderTime);
            }}
          >
            {motive.reminderTime}
          </Button>
        )}

        {!sameUser ? (
          <Button size="sm" onClick={expandContractBoost}>
            {showBoostCreator ? <>⬆</> : <>⬇</>}
          </Button>
        ) : (
          <></>
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
    </div>
  );
};

export default Motive;
