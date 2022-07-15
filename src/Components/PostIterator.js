import React from "react";
import { Card } from "react-bootstrap";

const PostIterator = ({ posts }) => {
  const postList = posts;
  return (
    <div>
      {postList.map((i) => {
        return (
          <Card style={{ marginRight: "1em", background: "#dee2e6" }}>
            <Card.Body>
              {i.content}
              {/* deprecated  */}
              {/* <Card.Title>{i.itemName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {i.owner.fullName}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          transaction id here
        </Card.Subtitle> */}
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default PostIterator;
