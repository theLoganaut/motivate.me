import { useState, useEffect } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { createPost } from "../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import { CreateMotive } from "../Controllers/Create";

const PostCreator = ({ userID }) => {
  const [postContent, setPostContent] = useState("");

  const submitMotive = (e) => {
    e.persist();
    CreateMotive(postContent, userID);
    setPostContent("");
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
              onChange={(e) => setPostContent(e.target.value)}
              value={postContent}
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
