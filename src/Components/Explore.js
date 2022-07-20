import React from "react";
import { Card, Form, Button } from "react-bootstrap";

const Explore = () => {
  return (
    <Card style={{ height: "100%", width: "80%" }} className="d-flex">
      <Card.Body>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{ width: "100%" }}
          />
          <Button variant="outline-default">➡️</Button>
        </Form>
        <div>tags would be looped out here</div>
      </Card.Body>
    </Card>
  );
};

export default Explore;
