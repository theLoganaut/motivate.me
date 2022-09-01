import { API, graphqlOperation } from "aws-amplify";
import {
  listHomeMotives,
  profilePageQuery,
  listTags,
  allMotivesWithTag,
  getUserFollowing,
  ongoingMotives,
} from "../graphql/queries";

const GetRecentPosts = async (setter) => {
  try {
    const motives = await API.graphql(graphqlOperation(listHomeMotives));
    setter(motives.data.listMotives.items);
  } catch (e) {
    console.log(e);
  }
};

const GetUserPosts = async (username, ...setters) => {
  try {
    const allUserData = await API.graphql(
      graphqlOperation(profilePageQuery, {
        username: username,
      })
    );
    // console.log(allUserData);

    const BoostsToMotives =
      allUserData.data.userByUsername.items[0].boosts.items.map(
        (item) => item.motive
      );
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

const GetFollowingMotives = async (username, setter) => {
  try {
    const following = await API.graphql(
      graphqlOperation(getUserFollowing, { username: username })
    );
    const betterFollowData =
      following.data.userByUsername.items[0].followed.items.map(
        (item) => item.motive
      );
    setter(betterFollowData);
  } catch (e) {
    console.log(e);
  }
};

const GetOngoingMotives = async (username, ...setters) => {
  try {
    const allMotives = await API.graphql(
      graphqlOperation(ongoingMotives, {
        username: username,
      })
    );
    //still needs to filter out all motives that are completed
    setters[0](allMotives.data.userByUsername.items[0].motives.items);
  } catch (e) {
    console.log(e);
  }
};

const GetUserVotes = async (username, ...setters) => {
  try {
    const allMotives = await API
      .graphql
      // needs a query
      // graphqlOperation(ongoingMotives, {
      //   username: username,
      // })
      ();
    //
    // setters[0](allMotives.data.userByUsername.items[0].motives.items);
  } catch (e) {
    console.log(e);
  }
};

export {
  GetUserVotes,
  GetFollowingMotives,
  GetRecentPosts,
  GetUserPosts,
  GetTags,
  GetAllMotivesWithTag,
  GetOngoingMotives,
};
