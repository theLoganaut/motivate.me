import { API, graphqlOperation } from "aws-amplify";
import {
  listHomeMotives,
  profilePageQuery,
  listTags,
  allMotivesWithTag,
} from "../graphql/queries";
import { v4 as uuidv4 } from "uuid";

const GetRecentPosts = async (setter) => {
  try {
    const motives = await API.graphql(graphqlOperation(listHomeMotives));
    setter(motives.data.listMotives.items);
  } catch (e) {
    console.log(e);
  }
};

const GetUserPosts = async (username, ...setters) => {
  setters.forEach((arg) => console.log(arg));
  try {
    const allUserData = await API.graphql(
      graphqlOperation(profilePageQuery, {
        username: username,
      })
    );
    const BoostsToMotives =
      allUserData.data.userByUsername.items[0].boosts.items.map(
        (item) => item.motive
      );
    // console.log(allUserData);
    const BsAndMs = [
      ...BoostsToMotives,
      ...allUserData.data.userByUsername.items[0].motives.items,
    ];
    console.log(BsAndMs);
    // BsAndMs.sort(function (a, b) {
    //   return a.time.localCompare(b.time);
    // });
    setters[0](BsAndMs);
  } catch (e) {
    console.log(e);
  }
};

const GetTags = async (setter) => {
  try {
    const data = await API.graphql(graphqlOperation(listTags));
    console.log(data);
    setter(data.data.listTags.items);
  } catch (e) {
    console.log(e);
  }
};

const GetAllMotivesWithTag = async (tag, setter) => {
  try {
    const motives = await API.graphql(
      graphqlOperation(allMotivesWithTag, { name: tag })
    );
    console.log(motives.data.tagsByName.items[0].motives.items);
    setter(motives.data.tagsByName.items[0].motives.items);
  } catch (e) {
    console.log(e);
  }
};

export { GetRecentPosts, GetUserPosts, GetTags, GetAllMotivesWithTag };
