/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBoost = /* GraphQL */ `
  query GetBoost($id: ID!) {
    getBoost(id: $id) {
      id
      content
      user {
        id
        username
        bio
        motives {
          nextToken
        }
        boosts {
          nextToken
        }
        followed {
          nextToken
        }
        votes {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      motive {
        id
        content
        user {
          id
          username
          bio
          createdAt
          updatedAt
          owner
        }
        boosts {
          nextToken
        }
        complete
        reminderTime
        following {
          nextToken
        }
        tag {
          id
          name
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        tagMotivesId
        publicUserMotivesId
        owner
      }
      votes {
        items {
          id
          verdict
          createdAt
          updatedAt
          boostVotesId
          publicUserVotesId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      motiveBoostsId
      publicUserBoostsId
      owner
    }
  }
`;
export const listBoosts = /* GraphQL */ `
  query ListBoosts(
    $filter: ModelBoostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBoosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        user {
          id
          username
          bio
          createdAt
          updatedAt
          owner
        }
        motive {
          id
          content
          complete
          reminderTime
          createdAt
          updatedAt
          tagMotivesId
          publicUserMotivesId
          owner
        }
        votes {
          nextToken
        }
        createdAt
        updatedAt
        motiveBoostsId
        publicUserBoostsId
        owner
      }
      nextToken
    }
  }
`;
export const getMotive = /* GraphQL */ `
  query GetMotive($id: ID!) {
    getMotive(id: $id) {
      id
      content
      user {
        id
        username
        bio
        motives {
          nextToken
        }
        boosts {
          nextToken
        }
        followed {
          nextToken
        }
        votes {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      boosts {
        items {
          id
          content
          createdAt
          updatedAt
          motiveBoostsId
          publicUserBoostsId
          owner
        }
        nextToken
      }
      complete
      reminderTime
      following {
        items {
          id
          timer
          createdAt
          updatedAt
          motiveFollowingId
          publicUserFollowedId
          owner
        }
        nextToken
      }
      tag {
        id
        name
        motives {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      tagMotivesId
      publicUserMotivesId
      owner
    }
  }
`;
export const listMotives = /* GraphQL */ `
  query ListMotives(
    $filter: ModelMotiveFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMotives(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        user {
          id
          username
          bio
          createdAt
          updatedAt
          owner
        }
        boosts {
          nextToken
        }
        complete
        reminderTime
        following {
          nextToken
        }
        tag {
          id
          name
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        tagMotivesId
        publicUserMotivesId
        owner
      }
      nextToken
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
      id
      name
      motives {
        items {
          id
          content
          complete
          reminderTime
          createdAt
          updatedAt
          tagMotivesId
          publicUserMotivesId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        motives {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getPublicUser = /* GraphQL */ `
  query GetPublicUser($id: ID!) {
    getPublicUser(id: $id) {
      id
      username
      bio
      motives {
        items {
          id
          content
          complete
          reminderTime
          createdAt
          updatedAt
          tagMotivesId
          publicUserMotivesId
          owner
        }
        nextToken
      }
      boosts {
        items {
          id
          content
          createdAt
          updatedAt
          motiveBoostsId
          publicUserBoostsId
          owner
        }
        nextToken
      }
      followed {
        items {
          id
          timer
          createdAt
          updatedAt
          motiveFollowingId
          publicUserFollowedId
          owner
        }
        nextToken
      }
      votes {
        items {
          id
          verdict
          createdAt
          updatedAt
          boostVotesId
          publicUserVotesId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPublicUsers = /* GraphQL */ `
  query ListPublicUsers(
    $filter: ModelPublicUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPublicUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        bio
        motives {
          nextToken
        }
        boosts {
          nextToken
        }
        followed {
          nextToken
        }
        votes {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getPrivateUser = /* GraphQL */ `
  query GetPrivateUser($id: ID!) {
    getPrivateUser(id: $id) {
      id
      username
      email
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPrivateUsers = /* GraphQL */ `
  query ListPrivateUsers(
    $filter: ModelPrivateUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrivateUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getFollow = /* GraphQL */ `
  query GetFollow($id: ID!) {
    getFollow(id: $id) {
      id
      user {
        id
        username
        bio
        motives {
          nextToken
        }
        boosts {
          nextToken
        }
        followed {
          nextToken
        }
        votes {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      motive {
        id
        content
        user {
          id
          username
          bio
          createdAt
          updatedAt
          owner
        }
        boosts {
          nextToken
        }
        complete
        reminderTime
        following {
          nextToken
        }
        tag {
          id
          name
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        tagMotivesId
        publicUserMotivesId
        owner
      }
      timer
      createdAt
      updatedAt
      motiveFollowingId
      publicUserFollowedId
      owner
    }
  }
`;
export const listFollows = /* GraphQL */ `
  query ListFollows(
    $filter: ModelFollowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollows(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          username
          bio
          createdAt
          updatedAt
          owner
        }
        motive {
          id
          content
          complete
          reminderTime
          createdAt
          updatedAt
          tagMotivesId
          publicUserMotivesId
          owner
        }
        timer
        createdAt
        updatedAt
        motiveFollowingId
        publicUserFollowedId
        owner
      }
      nextToken
    }
  }
`;
export const getVote = /* GraphQL */ `
  query GetVote($id: ID!) {
    getVote(id: $id) {
      id
      user {
        id
        username
        bio
        motives {
          nextToken
        }
        boosts {
          nextToken
        }
        followed {
          nextToken
        }
        votes {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      boost {
        id
        content
        user {
          id
          username
          bio
          createdAt
          updatedAt
          owner
        }
        motive {
          id
          content
          complete
          reminderTime
          createdAt
          updatedAt
          tagMotivesId
          publicUserMotivesId
          owner
        }
        votes {
          nextToken
        }
        createdAt
        updatedAt
        motiveBoostsId
        publicUserBoostsId
        owner
      }
      verdict
      createdAt
      updatedAt
      boostVotesId
      publicUserVotesId
      owner
    }
  }
`;
export const listVotes = /* GraphQL */ `
  query ListVotes(
    $filter: ModelVoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          username
          bio
          createdAt
          updatedAt
          owner
        }
        boost {
          id
          content
          createdAt
          updatedAt
          motiveBoostsId
          publicUserBoostsId
          owner
        }
        verdict
        createdAt
        updatedAt
        boostVotesId
        publicUserVotesId
        owner
      }
      nextToken
    }
  }
`;
export const tagsByName = /* GraphQL */ `
  query TagsByName(
    $name: String!
    $sortDirection: ModelSortDirection
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tagsByName(
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        motives {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const userByUsername = /* GraphQL */ `
  query UserByUsername(
    $username: String!
    $sortDirection: ModelSortDirection
    $filter: ModelPublicUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByUsername(
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        username
        bio
        motives {
          nextToken
        }
        boosts {
          nextToken
        }
        followed {
          nextToken
        }
        votes {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
