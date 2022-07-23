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
        motives {
          nextToken
        }
        boosts {
          nextToken
        }
        followed {
          nextToken
        }
        yays {
          nextToken
        }
        nays {
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
          createdAt
          updatedAt
          owner
        }
        boosts {
          nextToken
        }
        complete
        following {
          nextToken
        }
        createdAt
        updatedAt
        publicUserMotivesId
        owner
      }
      yays {
        items {
          id
          createdAt
          updatedAt
          boostYaysId
          publicUserYaysId
          owner
        }
        nextToken
      }
      nays {
        items {
          id
          createdAt
          updatedAt
          boostNaysId
          publicUserNaysId
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
          createdAt
          updatedAt
          owner
        }
        motive {
          id
          content
          complete
          createdAt
          updatedAt
          publicUserMotivesId
          owner
        }
        yays {
          nextToken
        }
        nays {
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
        motives {
          nextToken
        }
        boosts {
          nextToken
        }
        followed {
          nextToken
        }
        yays {
          nextToken
        }
        nays {
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
      createdAt
      updatedAt
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
          createdAt
          updatedAt
          owner
        }
        boosts {
          nextToken
        }
        complete
        following {
          nextToken
        }
        createdAt
        updatedAt
        publicUserMotivesId
        owner
      }
      nextToken
    }
  }
`;

export const homeMotiveList = /* GraphQL */ `
  query ListMotives(
    $filter: ModelMotiveFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMotives(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        content
        complete
        createdAt
        boosts {
          items {
            content
            yays {
              items {
                boostYaysId
                owner
              }
            }
            nays {
              items {
                boostNaysId
                owner
              }
            }
            owner
            publicUserBoostsId
          }
        }
        id
        owner
        publicUserMotivesId
      }
    }
  }
`;

export const getPublicUser = /* GraphQL */ `
  query GetPublicUser($id: ID!) {
    getPublicUser(id: $id) {
      id
      username
      motives {
        items {
          id
          content
          complete
          createdAt
          updatedAt
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
      yays {
        items {
          id
          createdAt
          updatedAt
          boostYaysId
          publicUserYaysId
          owner
        }
        nextToken
      }
      nays {
        items {
          id
          createdAt
          updatedAt
          boostNaysId
          publicUserNaysId
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
        motives {
          nextToken
        }
        boosts {
          nextToken
        }
        followed {
          nextToken
        }
        yays {
          nextToken
        }
        nays {
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
export const getFollow = /* GraphQL */ `
  query GetFollow($id: ID!) {
    getFollow(id: $id) {
      id
      user {
        id
        username
        motives {
          nextToken
        }
        boosts {
          nextToken
        }
        followed {
          nextToken
        }
        yays {
          nextToken
        }
        nays {
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
          createdAt
          updatedAt
          owner
        }
        boosts {
          nextToken
        }
        complete
        following {
          nextToken
        }
        createdAt
        updatedAt
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
          createdAt
          updatedAt
          owner
        }
        motive {
          id
          content
          complete
          createdAt
          updatedAt
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
export const getYay = /* GraphQL */ `
  query GetYay($id: ID!) {
    getYay(id: $id) {
      id
      user {
        id
        username
        motives {
          nextToken
        }
        boosts {
          nextToken
        }
        followed {
          nextToken
        }
        yays {
          nextToken
        }
        nays {
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
          createdAt
          updatedAt
          owner
        }
        motive {
          id
          content
          complete
          createdAt
          updatedAt
          publicUserMotivesId
          owner
        }
        yays {
          nextToken
        }
        nays {
          nextToken
        }
        createdAt
        updatedAt
        motiveBoostsId
        publicUserBoostsId
        owner
      }
      createdAt
      updatedAt
      boostYaysId
      publicUserYaysId
      owner
    }
  }
`;
export const listYays = /* GraphQL */ `
  query ListYays(
    $filter: ModelYayFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listYays(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          username
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
        createdAt
        updatedAt
        boostYaysId
        publicUserYaysId
        owner
      }
      nextToken
    }
  }
`;
export const getNay = /* GraphQL */ `
  query GetNay($id: ID!) {
    getNay(id: $id) {
      id
      user {
        id
        username
        motives {
          nextToken
        }
        boosts {
          nextToken
        }
        followed {
          nextToken
        }
        yays {
          nextToken
        }
        nays {
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
          createdAt
          updatedAt
          owner
        }
        motive {
          id
          content
          complete
          createdAt
          updatedAt
          publicUserMotivesId
          owner
        }
        yays {
          nextToken
        }
        nays {
          nextToken
        }
        createdAt
        updatedAt
        motiveBoostsId
        publicUserBoostsId
        owner
      }
      createdAt
      updatedAt
      boostNaysId
      publicUserNaysId
      owner
    }
  }
`;
export const listNays = /* GraphQL */ `
  query ListNays(
    $filter: ModelNayFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNays(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          username
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
        createdAt
        updatedAt
        boostNaysId
        publicUserNaysId
        owner
      }
      nextToken
    }
  }
`;
