import React from "react";
import { Card, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Styles/Sidebar.css";

const Sidebar = ({ signOut }) => {
  const sidebarLinks = [
    "Home",
    "Notifications",
    "Connections",
    "Profile",
    "More",
  ];

  return (
    <Card style={{ width: "18rem", height: "100%" }}>
      <Card.Body>
        {sidebarLinks.map((link) => {
          return (
            <Row className="sidebar-spacing">
              <Link to={`/${link}`} className="sidebar-links">
                {link}
              </Link>
            </Row>
          );
        })}
        {/* Communities, ie unique tags youve subscribed to */}
        {/* Explore Tags */}
        <Button variant="outline-default" onClick={signOut}>
          signOut
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Sidebar;
