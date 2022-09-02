import { withAuthenticator } from "@aws-amplify/ui-react";
import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import { GetAllMotivesWithTag, GetTags } from "../Controllers/Get";
import MotiveIterator from "../Components/MotiveIterator";
import { useParams, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Home.css";

function Communities({ user }) {
  const [motives, setMotives] = useState([]);
  const [tags, setTags] = useState([]);
  const params = useParams();

  useEffect(() => {
    GetTags(setTags);
    GetAllMotivesWithTag(params.currentTag, setMotives);
  }, [params]);

  return (
    <div>
      <Card style={{ height: "100%" }} className="d-flex, main-cards">
        <Card.Body>
          <div className="d-flex">
            {tags?.map((tag) => {
              return (
                <div className="spacing">
                  <Link className="links" to={`/communities/${tag.name}`}>
                    {tag.name}
                  </Link>
                </div>
              );
            })}
          </div>
        </Card.Body>
        <Card.Body>{params.currentTag}</Card.Body>
      </Card>
      <MotiveIterator
        motives={motives}
        userId={user.attributes.sub}
        username={user.username}
      />
    </div>
  );
}

export default withAuthenticator(Communities);
