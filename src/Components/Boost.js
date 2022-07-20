import { useState } from "react";
import { Col, Button, Card, Form } from "react-bootstrap";
import { CreateBoost } from "../Controllers/Create";

const Boost = ({ post, userId, username }) => {
  const [showBoostCreator, setShowBoostCreator] = useState(false);

  const expandContractBoost = () => {
    setShowBoostCreator((showBoostCreator) => !showBoostCreator);
  };

  const [boostContent, setBoostcontent] = useState("");

  const submitBoost = async (e) => {
    e.persist();
    CreateBoost(boostContent, userId, post.id);
    expandContractBoost();
    setBoostcontent("");
  };

  return (
    <div>
      <Col style={{ display: "flex" }}>
        <Card.Subtitle>{username}</Card.Subtitle>
        <Card.Body>{post.content} </Card.Body>
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
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => setBoostcontent(e.target.value)}
                value={boostContent}
                placeholder="Remember to be positive, contructive and uplifting!"
              />
            </Form.Group>
          </Form>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="primary" type="submit" onClick={submitBoost}>
              {" "}
              Boost!{" "}
            </Button>
          </div>
        </Card.Body>
      </div>
    </div>
  );
};

export default Boost;
