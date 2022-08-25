import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CreateBoost } from "../Controllers/Create";

const BoostCreator = ({ motiveId, userId, expandContractBoost }) => {
  const [boostContent, setBoostContent] = useState("");
  const submitBoost = async (e) => {
    e.persist();
    CreateBoost(boostContent, userId, motiveId);
    expandContractBoost();
    setBoostContent("");
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(e) => setBoostContent(e.target.value)}
            value={boostContent}
            placeholder="Remember to be positive, contructive and uplifting!"
            className="sub-cards"
          />
        </Form.Group>
      </Form>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button className="buttons" type="submit" onClick={submitBoost}>
          {" "}
          Boost!{" "}
        </Button>
      </div>
    </>
  );
};

export default BoostCreator;
