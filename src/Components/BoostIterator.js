import React from "react";
import { Card, Button, ButtonGroup, Row, Col } from "react-bootstrap";

const BoostIterator = ({ boosts }) => {
  const boostList = boosts;

  console.log(boosts);

  return (
    <>
      {boostList.map((boost) => {
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
                  <Card.Text>{boost.content}</Card.Text>
                  <Card.Subtitle>{boost.owner}</Card.Subtitle>
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
    </>
  );
};

export default BoostIterator;
