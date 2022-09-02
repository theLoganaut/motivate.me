import React from "react";
import AdSense from "react-adsense";
import { Card } from "react-bootstrap";

const Explore = () => {
  return (
    <Card
      style={{ height: "100%", width: "80%" }}
      className="d-flex, main-cards"
    >
      <div style={{ borderColor: "black", borderWidth: "1px" }}>
        <AdSense.Google
          client="ca-pub-8632109705555830"
          slot="5522106913"
          style={{ display: "block" }}
          layout="in-article"
          format="fluid"
        />
      </div>
    </Card>
  );
};

export default Explore;
