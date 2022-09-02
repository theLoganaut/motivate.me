import { useState, useEffect } from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import DateTimePicker from "react-datetime-picker";
import { CreateMotive } from "../Controllers/Create";
import "../Styles/MotiveCreator.css";

const MotiveCreator = ({ userID, tags }) => {
  const [motiveContent, setMotiveContent] = useState("");
  const [motiveTag, setMotiveTag] = useState(false);
  const [reminderTime, changeReminderTime] = useState(new Date());
  const [disallowPost, setDisallowPost] = useState(true);
  const tagList = tags;
  const submitMotive = (e) => {
    e.persist();
    const toISO = reminderTime.toISOString();
    CreateMotive(motiveContent, motiveTag, userID, toISO);
    setMotiveContent("");
    setMotiveTag(false);
  };

  useEffect(() => {
    if (motiveTag !== false) {
      setDisallowPost(false);
    }
  }, [motiveTag]);

  return (
    <Card className="main-cards">
      <Card.Body>
        {/* title to be inherited from route */}
        <Row>
          <Col>
            <Card.Title>Home</Card.Title>
          </Col>
          <Col
            style={{
              justifyContent: "flex-end",
              marginLeft: "40%",
            }}
          >
            <div>
              <Form.Select
                aria-label="Default select example"
                style={{
                  background: "#F3EEC3",
                  overflow: "visible",
                }}
                onChange={(e) => setMotiveTag(e.target.value)}
              >
                <option>Tag me!</option>
                {tagList.map((tag) => {
                  return (
                    // figure out how to change background and txt color here
                    <option
                      value={tag.id}
                      style={{
                        background: "red !important",
                        color: "blue !important",
                      }}
                    >
                      {tag.name}
                    </option>
                  );
                })}
              </Form.Select>
            </div>
          </Col>
        </Row>

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
              onChange={(e) => setMotiveContent(e.target.value)}
              value={motiveContent}
              className="sub-cards"
              placeholder="What do you need a boost on today?"
            />
          </Form.Group>
        </Form>
        <Row>
          <Col>
            <DateTimePicker
              onChange={changeReminderTime}
              value={reminderTime}
              style={{ maxWidth: "30%", display: "flex" }}
            />
          </Col>
          <Col className="d-flex" style={{ justifyContent: "flex-end" }}>
            <Button
              type="submit"
              onClick={submitMotive}
              disabled={disallowPost}
              className="buttons"
            >
              {" "}
              Post!{" "}
            </Button>
          </Col>
        </Row>

        {/* <div style={{ display: "flex" }}>
          <DateTimePicker
            onChange={changeReminderTime}
            value={reminderTime}
            style={{ maxWidth: "30%", display: "flex" }}
          />
          <Form.Select
            aria-label="Default select example"
            style={{ maxWidth: "30%", justifyContent: "flex-end" }}
            onChange={(e) => setMotiveTag(e.target.value)}
          >
            <option>Tag me!</option>
            {tagList.map((tag) => {
              return <option value={tag.id}>{tag.name}</option>;
            })}
          </Form.Select>
          <div style={{ justifySelf: "flex-end" }}>
            <Button
              variant="primary"
              type="submit"
              onClick={"submitMotive"}
              disabled={disallowPost}
              className="buttons"
            >
              {" "}
              Post!{" "}
            </Button>
          </div>
        </div> */}
      </Card.Body>
    </Card>
  );
};

export default MotiveCreator;
