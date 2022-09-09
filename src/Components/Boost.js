import React, { useEffect, useState } from "react";
import { Card, Button, ButtonGroup, Row, Col } from "react-bootstrap";
import { CreateVote, DeleteVote } from "../Controllers/Create";
import { Link } from "react-router-dom";

const Boost = ({ boost, username, userId }) => {
  const [voted, setVoted] = useState(false);
  const [voteId, setVoteId] = useState("");
  // let yayButton = CreateYay;
  // let nayButton = CreateNay;
  // checks if the username is in the owner of yays/nays
  useEffect(() => {
    // let yays = boost.yays.items.map((item) => item.owner);
    // let ownerList = boost.votes.items.map((item) => item.owner);
    let ownerCheck = boost.votes.items.find((item) => {
      return item.owner === username;
    });
    if (ownerCheck.length !== 0) {
      setVoteId(ownerCheck.id);
      setVoted(true);
    }
  }, [boost.votes.items, username]);

  // const recastVote = (voteId) => {
  //   DeleteVote(voteId)
  // };

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
          <Link to={`/Profile/${boost.owner}`}>{boost.owner}</Link>
          <Card.Text style={{ marginLeft: "2em", marginTop: ".5em" }}>
            {boost.content}
          </Card.Text>
        </Col>
        <Col>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            {voted ? (
              <Button
                className="yum-buttons"
                onClick={() => DeleteVote(voteId)}
              >
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
