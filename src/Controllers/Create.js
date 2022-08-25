import { API, graphqlOperation } from "aws-amplify";
import {
  createMotive,
  createBoost,
  createYay,
  createNay,
  createFollow,
} from "../graphql/mutations";
import { v4 as uuidv4 } from "uuid";

let date = new Date().toISOString();

const CreateMotive = async (content, tagId, userID, reminderTime) => {
  const postData = {
    id: uuidv4(),
    tagMotivesId: tagId,
    content: content,
    publicUserMotivesId: userID,
    reminderTime: reminderTime,
    complete: false,
    createdAt: date,
  };
  try {
    await API.graphql(graphqlOperation(createMotive, { input: postData })).then(
      (r) => console.log(r)
    );
    console.log(postData);
  } catch (error) {
    console.log("error creating new Motive:", error);
  }
};

const CreateBoost = async (content, userID, motiveId) => {
  //needs to get post id too
  const postData = {
    id: uuidv4(),
    content: content,
    publicUserBoostsId: userID,
    motiveBoostsId: motiveId,
    createdAt: date,
  };
  try {
    await API.graphql(graphqlOperation(createBoost, { input: postData })).then(
      (r) => console.log(r)
    );
  } catch (error) {
    console.log("error creating new Boost:", error);
  }
};

const CreateYay = async (userID, boostId) => {
  //needs to get post id too
  const postData = {
    id: uuidv4(),
    boostYaysId: boostId,
    createdAt: date,
    publicUserYaysId: userID,
  };
  try {
    await API.graphql(graphqlOperation(createYay, { input: postData })).then(
      (r) => console.log(r)
    );
  } catch (error) {
    console.log("error creating new Yay:", error);
  }
};

const CreateNay = async (userID, boostId) => {
  //needs to get post id too
  const postData = {
    id: uuidv4(),
    boostNaysId: boostId,
    createdAt: date,
    publicUserNaysId: userID,
  };
  try {
    await API.graphql(graphqlOperation(createNay, { input: postData })).then(
      (r) => console.log(r)
    );
  } catch (error) {
    console.log("error creating new Nay:", error);
  }
};

const FollowMotive = async (userID, motiveId, reminderTime) => {
  //needs to get post id too
  const postData = {
    id: uuidv4(),
    motiveFollowingId: motiveId,
    createdAt: date,
    publicUserFollowedId: userID,
    timer: reminderTime,
  };
  try {
    await API.graphql(graphqlOperation(createFollow, { input: postData })).then(
      (r) => console.log(r)
    );
  } catch (error) {
    console.log("error creating new Follow:", error);
  }
};
export { CreateMotive, CreateBoost, CreateYay, CreateNay, FollowMotive };
