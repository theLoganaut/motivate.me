import React from "react";
import { Card, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Styles/Sidebar.css";
import "../Styles/Generics.css";

const Sidebar = ({ signOut, username }) => {
  const sidebarLinks = [
    "Home",
    "Following",
    "Communities",
    "Profile",
    "Changelog",
    "Sign Out",
  ];

  //! Communities link still needs to have your favorite tags below it

  return (
    <Card style={{ width: "18rem" }} className="main-cards">
      <Card.Body>
        {sidebarLinks.map((link) => {
          return (
            <Row className="sidebar-spacing">
              {link === "Profile" ? (
                <Link to={`/profile/${username}/mnb`} className="big-links">
                  {link}
                </Link>
              ) : link === "Sign Out" ? (
                <Button
                  className="button-link"
                  variant="outline-default"
                  onClick={signOut}
                >
                  Sign Out
                </Button>
              ) : (
                <Link to={`/${link}`} className="big-links">
                  {link}
                </Link>
              )}
            </Row>
          );
        })}
      </Card.Body>
    </Card>
  );
};

export default Sidebar;
