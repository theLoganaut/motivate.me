import { useState, useEffect } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { CreateMotive } from "../Controllers/Create";

const MotiveCreator = ({ userID, setRefresh, refresh, tags }) => {
  const [motiveContent, setMotiveContent] = useState("");
  const [motiveTag, setMotiveTag] = useState(false);
  const [disallowPost, setDisallowPost] = useState(true);
  const tagList = tags;
  const submitMotive = (e) => {
    e.persist();
    CreateMotive(motiveContent, motiveTag, userID);
    setRefresh((refresh) => refresh++);
    setMotiveContent("");
    setMotiveTag(false);
  };

  useEffect(() => {
    if (motiveTag !== false) {
      setDisallowPost(false);
    }
  }, [motiveTag]);

  return (
    <Card>
      <Card.Body>
        {/* title to be inherited from route */}
        <div>
          <Card.Title>Home</Card.Title>
          <div className="d-flex" style={{ justifyContent: "flex-end" }}></div>
        </div>

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
          <Form.Select
            aria-label="Default select example"
            style={{ maxWidth: "50%", justifyContent: "flex-end" }}
            onChange={(e) => setMotiveTag(e.target.value)}
          >
            <option>Tag me!</option>
            {tagList.map((tag) => {
              return <option value={tag.id}>{tag.name}</option>;
            })}
          </Form.Select>
          <Button
            variant="primary"
            type="submit"
            onClick={submitMotive}
            disabled={false}
          >
            {" "}
            Post!{" "}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MotiveCreator;
