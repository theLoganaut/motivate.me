import { useState, useEffect } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { createPost } from "../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";

const PostCreator = ({ userID }) => {
  const [postContent, setPostContent] = useState("");

  const submitPost = async (e) => {
    e.persist();
    console.log(e);
    setPostContent("");
    const postData = {
      id: uuidv4(),
      content: postContent,
      userPostsId: userID,
    };
    try {
      await API.graphql(graphqlOperation(createPost, { input: postData })).then(
        console.log("test")
      );
    } catch (error) {
      console.log("error creating new Post:", error);
    } finally {
      setPostContent("");
      console.log(postData, "hit finally");
    }
  };

  return (
    <Card style={{ width: "22rem" }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example text area</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => setPostContent(e.target.value)}
              value={postContent}
            />
          </Form.Group>
        </Form>
        <Button variant="primary" type="submit" onClick={submitPost}>
          {" "}
          Motivate!{" "}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PostCreator;
