import React from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const Alert = ({ showAlert, setShowAlert }) => {
  return (
    <ToastContainer
      position="top-center"
      className="p-3"
      style={{ zIndex: "1" }}
    >
      <Toast show={showAlert} onClose={() => setShowAlert(false)}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Note From the Dev</strong>
          <small>Until Further Notice</small>
        </Toast.Header>
        <Toast.Body>
          Motivate.me is in Alpha! Please report any bugs to -link-
        </Toast.Body>
      </Toast>
      {/* //! toast container allows for stacked alerts in the future */}
    </ToastContainer>
  );
};

export default Alert;
