import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import ReportCreator from "../Components/ReportCreator";

const ChangelogReports = () => {
  const upcoming = {
    title: "September Changelist",
    changes: [
      "Adding Settings to change some colors and user settings.",
      "Adding voting to boosts.",
      "Fixing minor visual bugs, and logo.",
    ],
  };

  const changeLog = [
    {
      title: "September Changelist",
      changes: [
        "Adding Settings to change some colors and user settings.",
        "Adding voting to boosts.",
        "Fixing minor visual bugs, and logo.",
      ],
    },
    {
      title: "October Changelist",
      changes: [
        "Adding Settings to change some colors and user settings.",
        "Adding voting to boosts.",
        "Fixing minor visual bugs, and logo.",
      ],
    },
  ];

  return (
    <div>
      {/* <ReportCreator /> */}
      {/* now the list of changes */}
      <ReportCreator />
      <Row>
        {/* //! add this when next sept changes go thru */}
        {/* <Col style={{ paddingRight: "0em" }}>
          <Card className="main-cards" style={{ borderRadius: "0px" }}>
            <Card.Title>Latest: Changes</Card.Title>
          </Card>
        </Col> */}
        {/* style={{ paddingLeft: "0em" }} style={{ borderRadius: "0px" }}*/}
        <Col>
          <Card className="main-cards" style={{ marginTop: ".5em" }}>
            <Card.Title>Upcoming</Card.Title>
            <Card.Title>{upcoming.title}</Card.Title>
            <Card.Body>
              {upcoming.changes.map((change) => {
                return <li>{change}</li>;
              })}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          {/* <Card>
            <Card.Title>Previous</Card.Title>
          </Card> */}
        </Col>
      </Row>
    </div>
  );
};

export default ChangelogReports;
