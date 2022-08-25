import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Explore = ({ tags }) => {
  const listTags = tags;

  console.log(listTags);

  return (
    <Card
      style={{ height: "100%", width: "80%" }}
      className="d-flex, main-cards"
    >
      <Card.Body>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{ width: "100%" }}
            className="sub-cards"
          />
          {/* <Button variant="outline-default">➡️</Button> */}
        </Form>
        <div className="d-flex">
          {listTags?.map((tag) => {
            return (
              <div className="spacing">
                <Link className="links" to={`/Communities/${tag.name}`}>
                  {tag.name}
                </Link>
              </div>
            );
          })}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Explore;
