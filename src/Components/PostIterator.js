import { useState } from "react";
import { Card, Button, Col, Row, ButtonGroup } from "react-bootstrap";
import CommentCreator from "./CommentCreator";
import Boost from "./Boost";
import "../Styles/PostIterator.css";

const PostIterator = ({ posts, userId }) => {
  const postList = posts;

  return (
    <div>
      {postList.map((post) => {
        return (
          <Card
            style={{
              marginRight: "1em",
              background: "#dee2e6",
              display: "flex",
            }}
          >
            <Boost post={post} userId={userId} username={post.owner} />

            {post.comments.items.map((comment) => {
              return (
                <>
                  <Card
                    style={{
                      marginRight: "2em",
                      marginLeft: "2em",
                      background: "#dee2e6",
                      display: "flex",
                    }}
                  >
                    <Row>
                      <Col>
                        <Card.Text>{comment.content}</Card.Text>
                        <Card.Subtitle>{comment.owner}</Card.Subtitle>
                      </Col>
                      <Col>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                          }}
                        >
                          <ButtonGroup vertical>
                            <Button variant="success">Yum!</Button>
                            <Button variant="danger">Yuck!</Button>
                          </ButtonGroup>
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </>
              );
            })}
          </Card>
        );
      })}
    </div>
  );
};

export default PostIterator;
