import { useState, useEffect } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { createPost } from "../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";

const PostCreator = ({ userID }) => {
  const [postContent, setPostContent] = useState("");

  const [postData, setPostData] = useState({
    userPostsId: userID,
    content: "",
    id: uuidv4(),
  });

  // useEffect(() => {
  //   console.log("refresh?");
  //   setPostData((postData) => ({
  //     ...postData,
  //     content: "",
  //     id: uuidv4(),
  //   }));
  // }, [postData.content]);

  const makeNewPost = async () => {
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
      // setPostData((postData) => ({
      //   ...postData,
      //   content: "",
      //   id: uuidv4(),
      // }));
      // setPostContent("");
      // console.log(postData, "hit finally");
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
            />
          </Form.Group>
        </Form>
        <Button variant="primary" type="submit" onClick={makeNewPost}>
          {" "}
          Motivate!{" "}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PostCreator;
