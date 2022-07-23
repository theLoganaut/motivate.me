import { useState, useEffect } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { CreateMotive } from "../Controllers/Create";

const PostCreator = ({ userID }) => {
  const [motiveContent, setMotiveContent] = useState("");

  const submitMotive = (e) => {
    e.persist();
    CreateMotive(motiveContent, userID);
    setMotiveContent("");
  };

  return (
    <Card>
      <Card.Body>
        {/* title to be inherited from route */}
        <Card.Title>Home</Card.Title>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => setMotiveContent(e.target.value)}
              value={motiveContent}
              placeholder="What do you need a boost on today?"
            />
          </Form.Group>
        </Form>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="primary" type="submit" onClick={submitMotive}>
            {" "}
            Post!{" "}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PostCreator;
