import { API, graphqlOperation } from "aws-amplify";
import {
  createMotive,
  createBoost,
  createYay,
  createNay,
} from "../graphql/mutations";
import { v4 as uuidv4 } from "uuid";

const CreateMotive = async (content, tagId, userID) => {
  const postData = {
    id: uuidv4(),
    tagMotivesId: tagId,
    content: content,
    publicUserMotivesId: userID,
    complete: false,
  };
  try {
    await API.graphql(graphqlOperation(createMotive, { input: postData })).then(
      (r) => console.log(r)
    );
    console.log(postData);
  } catch (error) {
    console.log("error creating new Post:", error);
  }
};

const CreateBoost = async (content, userID, motiveId) => {
  //needs to get post id too
  const postData = {
    id: uuidv4(),
    content: content,
    publicUserBoostsId: userID,
    motiveBoostsId: motiveId,
  };
  try {
    await API.graphql(graphqlOperation(createBoost, { input: postData })).then(
      (r) => console.log(r)
    );
  } catch (error) {
    console.log("error creating new Post:", error);
  }
};

const CreateYay = async (userID, boostId) => {
  //needs to get post id too
  const postData = {
    id: uuidv4(),
    publicUserBoostsId: userID,
    boostYaysId: boostId,
  };
  try {
    await API.graphql(graphqlOperation(createYay, { input: postData })).then(
      (r) => console.log(r)
    );
  } catch (error) {
    console.log("error creating new Post:", error);
  }
};

const CreateNay = async (userID, boostId) => {
  //needs to get post id too
  const postData = {
    id: uuidv4(),
    publicUserBoostsId: userID,
    boostYaysId: boostId,
  };
  try {
    await API.graphql(graphqlOperation(createNay, { input: postData })).then(
      (r) => console.log(r)
    );
  } catch (error) {
    console.log("error creating new Post:", error);
  }
};

export { CreateMotive, CreateBoost, CreateYay, CreateNay };
