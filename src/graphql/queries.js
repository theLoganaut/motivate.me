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
          reminderTime
          createdAt
          updatedAt
          tagMotivesId
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
          reminderTime
          createdAt
          updatedAt
          tagMotivesId
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
          reminderTime
          createdAt
          updatedAt
          tagMotivesId
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
export const tagsByName = /* GraphQL */ `
  query TagsByName(
    $name: String
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
    $username: String
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

export const listHomeMotives = /* GraphQL */ `
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
          items {
            id
            owner
            content
            yays {
              items {
                owner
              }
            }
            nays {
              items {
                owner
              }
            }
          }
        }
        complete
        following {
          items {
            owner
          }
        }
        createdAt
        updatedAt
        publicUserMotivesId
        owner
        reminderTime
        tag {
          name
        }
      }
      nextToken
    }
  }
`;
export const allMotivesWithTag = /* GraphQL */ `
  query TagsByName(
    $name: String
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
        name
        motives {
          items {
            content
            owner
            boosts {
              items {
                content
                owner
                yays {
                  items {
                    owner
                  }
                }
                nays {
                  items {
                    owner
                  }
                }
              }
            }
          }
        }
      }
      nextToken
    }
  }
`;

export const profilePageQuery = /* GraphQL */ `
  query UserByUsername(
    $username: String
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
        username
        boosts {
          items {
            motive {
              content
              complete
              owner
              reminderTime
              following {
                items {
                  owner
                }
              }
              boosts {
                items {
                  content
                  owner
                  yays {
                    items {
                      owner
                    }
                  }
                  nays {
                    items {
                      owner
                    }
                  }
                }
              }
              tag {
                name
              }
            }
          }
        }
        motives {
          items {
            complete
            content
            owner
            reminderTime
            tag {
              name
            }
            boosts {
              items {
                content
                owner
                nays {
                  items {
                    owner
                  }
                }
                yays {
                  items {
                    owner
                  }
                }
              }
            }
            following {
              items {
                owner
              }
            }
          }
        }
      }
      nextToken
    }
  }
`;

export const getUserFollowing = /* GraphQL */ `
  query UserByUsername(
    $username: String
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
        followed {
          items {
            motive {
              boosts {
                items {
                  owner
                  yays {
                    items {
                      owner
                    }
                  }
                  nays {
                    items {
                      owner
                    }
                  }
                  content
                }
              }
              content
              createdAt
              owner
              reminderTime
              complete
              following {
                items {
                  owner
                }
              }
            }
            timer
          }
        }
      }
      nextToken
    }
  }
`;

export const ongoingMotives = /* GraphQL */ `
  query UserByUsername(
    $username: String
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
        username
        motives {
          items {
            complete
            content
            owner
            reminderTime
            tag {
              name
            }
            boosts {
              items {
                content
                owner
                nays {
                  items {
                    owner
                  }
                }
                yays {
                  items {
                    owner
                  }
                }
              }
            }
            following {
              items {
                owner
              }
            }
          }
        }
      }
      nextToken
    }
  }
`;

// !UNFINISHISH/UNIMPLEMENTED
export const userYaysAndNays = /* GraphQL */ `
  query UserByUsername(
    $username: String
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
        username
        motives {
          items {
            complete
            content
            owner
            reminderTime
            tag {
              name
            }
            boosts {
              items {
                content
                owner
                nays {
                  items {
                    owner
                  }
                }
                yays {
                  items {
                    owner
                  }
                }
              }
            }
            following {
              items {
                owner
              }
            }
          }
        }
      }
      nextToken
    }
  }
`;
