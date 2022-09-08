import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const RiskModal = ({ showRisk, setShowRisk }) => {
  const handleRiskClose = () => {
    setShowRisk(false);
  };

  const [agreement, setAgreement] = useState(false);

  return (
    // <ToastContainer
    //   position="middle-center"
    //   className="p-3"
    //   style={{ zIndex: "1" }}
    // >
    //   <Toast show={showRisk} onClose={() => setShowRisk(false)}>
    //     <Toast.Header>
    //       <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
    //       <strong className="me-auto">Developer Alert!</strong>
    //       <small>Until Further Notice</small>
    //     </Toast.Header>
    //     <Toast.Body>
    //       Push that Mountain is still in early development! Clicking off this
    //       confirms that by creating an account you understand this. If you want
    //       to read how I handle your data, please refer to: -link-
    //     </Toast.Body>
    //   </Toast>
    //   {/* //! toast container allows for stacked alerts in the future */}
    // </ToastContainer>
    <Modal
      show={showRisk}
      onHide={handleRiskClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Developer Alert!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Push that Mountain is still in early development! Clicking off this
        confirms that by creating an account you understand this. If you want to
        read how I handle your data, please refer to: -link-
      </Modal.Body>
      <Modal.Footer>
        <Form>
          <Form.Check
            type="checkbox"
            label="I'm okay with a work-in-progress experience."
            onChange={() => setAgreement(!agreement)}
          />
        </Form>

        <Button
          variant="danger"
          onClick={handleRiskClose}
          disabled={!agreement}
        >
          Agree
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RiskModal;
