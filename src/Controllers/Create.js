import { API, graphqlOperation } from "aws-amplify";
import { createPost, createComment } from "../graphql/mutations";
import { v4 as uuidv4 } from "uuid";

const CreateMotive = async (content, userID) => {
  const postData = {
    id: uuidv4(),
    content: content,
    publicUserPostsId: userID,
  };
  try {
    // await API.graphql(graphqlOperation(createPost, { input: postData })).then(
    //   console.log("test")
    // );
    console.log(postData);
  } catch (error) {
    console.log("error creating new Post:", error);
  }
};

const CreateBoost = async (content, userID, postID) => {
  //needs to get post id too
  const postData = {
    id: uuidv4(),
    content: content,
    publicUserPostsId: userID,
    postCommentsId: postID,
  };
  try {
    // await API.graphql(graphqlOperation(createComment, { input: postData })).then(
    //   console.log("test")
    // );
    console.log(postData);
  } catch (error) {
    console.log("error creating new Post:", error);
  }
};

export { CreateMotive, CreateBoost };
