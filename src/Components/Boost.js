import React, { useEffect, useState } from "react";
import { Card, Button, ButtonGroup, Row, Col } from "react-bootstrap";
import { CreateVote } from "../Controllers/Create";
import { Link } from "react-router-dom";

const Boost = ({ boost, username, userId }) => {
  const [voted, setVoted] = useState(false);
  // let yayButton = CreateYay;
  // let nayButton = CreateNay;
  // checks if the username is in the owner of yays/nays
  // useEffect(() => {
  //   let yays = boost.yays.items.map((item) => item.owner);
  //   let nays = boost.nays.items.map((item) => item.owner);
  //   if (yays.includes(username) || nays.includes(username)) {
  //     setVoted(true);
  //   }
  // }, [boost.nays.items, boost.yays.items, username]);

  const reVote = () => {
    // console.log("eventually delete the vote then allow");
  };

  const userVote = (bool) => {
    setVoted(true);
    CreateVote(userId, boost.id, bool);
  };

  //! voting needs overhaul before implementing

  return (
    <Card
      style={{
        marginRight: "2em",
        marginLeft: "2em",
        background: "#dee2e6",
        display: "flex",
      }}
      className="sub-cards"
    >
      <Row>
        <Col style={{ minWidth: "75%" }}>
          <Card.Text style={{ marginLeft: "2em", marginTop: ".5em" }}>
            {boost.content}
          </Card.Text>
          <Link to={`/Profile/${boost.owner}`}>{boost.owner}</Link>
        </Col>
        <Col>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            {voted ? (
              <Button className="yum-buttons" onClick={reVote(boost.id)}>
                Recast?
              </Button>
            ) : (
              <ButtonGroup vertical>
                <Button className="yum-buttons" onClick={() => userVote(true)}>
                  👍
                </Button>
                <Button
                  className="yuck-buttons"
                  onClick={() => userVote(false)}
                >
                  👎
                </Button>
              </ButtonGroup>
            )}
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default Boost;
