import { useState, useEffect } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { API, graphqlOperation } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import { createComment } from "../graphql/mutations";

const CommentCreator = ({ postId, userId }) => {
  const [commentContent, setCommentContent] = useState("");

  const submitComment = async (e) => {
    e.persist();
    console.log(e);
    const commentData = {
      id: uuidv4(),
      content: commentContent,
      publicUserCommentsId: userId,
      postCommentsId: postId,
    };
    try {
      await API.graphql(
        graphqlOperation(createComment, { input: commentData })
      ).then(console.log("test"));
    } catch (error) {
      console.log("error creating new Post:", error);
    } finally {
      setCommentContent("");
      console.log(commentData, "hit finally");
    }
  };

  console.log(postId);

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
              onChange={(e) => setCommentContent(e.target.value)}
              value={commentContent}
            />
          </Form.Group>
        </Form>
        <Button variant="primary" type="submit" onClick={submitComment}>
          {" "}
          Motivate!{" "}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CommentCreator;
