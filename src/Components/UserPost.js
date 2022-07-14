import React from "react";
import { Card, Button } from "react-bootstrap";

const UserPost = () => {
  return (
    <Card style={{ width: "22rem" }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>Just some text in the meantime</Card.Text>
        <Button variant="primary"> Motivate! </Button>
      </Card.Body>
    </Card>
  );
};

export default UserPost;
