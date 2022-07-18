import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import CommentCreator from "./CommentCreator";

const PostIterator = ({ posts, userId }) => {
  const postList = posts;

  const [showPostCreator, setShowPostCreator] = useState(false);

  const showCommentCreator = () => {
    setShowPostCreator((showPostCreator) => !showPostCreator);
  };

  return (
    <div>
      {postList.map((post) => {
        return (
          <Card style={{ marginRight: "1em", background: "#dee2e6" }}>
            <Card.Body>{post.content}</Card.Body>
            <Button style={{ maxWidth: "10em" }} onClick={showCommentCreator}>
              Comment Motivation
            </Button>
            {post.comments.items.map((comment) => {
              return (
                <>
                  {showPostCreator ? (
                    <CommentCreator postId={post.id} userId={userId} />
                  ) : (
                    <Card
                      style={{
                        marginRight: "3em",
                        marginLeft: "3em",
                        background: "#dee2e6",
                      }}
                    >
                      <Card.Body>{comment.content}</Card.Body>
                    </Card>
                  )}
                </>
              );
            })}
          </Card>
        );
      })}
    </div>
  );
};

export default PostIterator;
