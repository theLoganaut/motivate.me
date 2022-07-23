import { useState, useEffect } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { API, graphqlOperation } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import { createboost } from "../graphql/mutations";

const BoostCreator = ({ motiveId, userId, submitBoost }) => {
  const [boostContent, setBoostContent] = useState("");
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
          />
        </Form.Group>
      </Form>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="primary" type="submit" onClick={submitBoost}>
          {" "}
          Boost!{" "}
        </Button>
      </div>
    </>
  );
};

export default BoostCreator;
