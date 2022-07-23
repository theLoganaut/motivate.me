import { useState } from "react";
import { Col, Button, Card, Form } from "react-bootstrap";
import { CreateBoost } from "../Controllers/Create";
import BoostCreator from "./BoostCreator";

const Motive = ({ motive, userId, username }) => {
  const [showBoostCreator, setShowBoostCreator] = useState(false);

  const expandContractBoost = () => {
    setShowBoostCreator((showBoostCreator) => !showBoostCreator);
  };

  const [boostContent, setBoostcontent] = useState("");

  const submitBoost = async (e) => {
    e.persist();
    CreateBoost(boostContent, userId, motive.id);
    expandContractBoost();
    setBoostcontent("");
  };

  return (
    <div>
      <Col style={{ display: "flex" }}>
        <Card.Subtitle>{username}</Card.Subtitle>
        <Card.Body>{motive.content} </Card.Body>
        <Button size="sm" onClick={expandContractBoost}>
          {showBoostCreator ? <>⬆</> : <>⬇</>}
        </Button>
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
            submitBoost={submitBoost}
          />
        </Card.Body>
      </div>
    </div>
  );
};

export default Motive;
