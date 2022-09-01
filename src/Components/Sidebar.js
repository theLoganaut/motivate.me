import React from "react";
import { Card, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Styles/Sidebar.css";
import "../Styles/Generics.css";

const Sidebar = ({ signOut, username }) => {
  const sidebarLinks = ["Home", "Following", "Communities", "Profile", "More"];

  return (
    <Card style={{ width: "18rem", height: "100%" }} className="main-cards">
      <Card.Body>
        {sidebarLinks.map((link) => {
          return (
            <Row className="sidebar-spacing">
              {link === "Profile" ? (
                <Link to={`/profile/${username}/mnb`} className="big-links">
                  {link}
                </Link>
              ) : (
                <Link to={`/${link}`} className="big-links">
                  {link}
                </Link>
              )}
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
