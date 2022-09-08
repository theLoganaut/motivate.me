import React, { useState, useEffect } from "react";
import { Card, Row, Form, Col, Button } from "react-bootstrap";

const ReportCreator = () => {
  const [reportSubject, setReportSubject] = useState("");
  const [reportContent, setReportContent] = useState("");
  const [disallowPost, setDisallowPost] = useState(true);

  const submitReport = (e) => {
    e.persist();
    setReportContent("");
    setReportSubject("");
  };

  useEffect(() => {
    if (reportContent.length > 5) {
      setDisallowPost(false);
    }
  }, [reportContent.length]);

  return (
    <Card className="main-cards">
      <Card.Body>
        {/* title to be inherited from route */}
        <Card.Title>Bug Reporter</Card.Title>

        <Form>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
            style={{ background: "#F3EEC3 !important" }}
          >
            <Form.Control
              as="textarea"
              style={{}}
              rows={3}
              onChange={(e) => setReportContent(e.target.value)}
              value={reportContent}
              className="sub-cards"
              placeholder="Please describe what you did to for it to happen, and what browser you're on."
            />
          </Form.Group>
        </Form>
        <Row>
          <Col className="d-flex" style={{ justifyContent: "flex-end" }}>
            <Button
              type="submit"
              onClick={submitReport}
              disabled={disallowPost}
              className="buttons"
            >
              {" "}
              Send!{" "}
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ReportCreator;
