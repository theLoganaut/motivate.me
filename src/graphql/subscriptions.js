/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBoost = /* GraphQL */ `
  subscription OnCreateBoost {
    onCreateBoost {
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
export const onUpdateBoost = /* GraphQL */ `
  subscription OnUpdateBoost {
    onUpdateBoost {
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
export const onDeleteBoost = /* GraphQL */ `
  subscription OnDeleteBoost {
    onDeleteBoost {
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
export const onCreateMotive = /* GraphQL */ `
  subscription OnCreateMotive {
    onCreateMotive {
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
export const onUpdateMotive = /* GraphQL */ `
  subscription OnUpdateMotive {
    onUpdateMotive {
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
export const onDeleteMotive = /* GraphQL */ `
  subscription OnDeleteMotive {
    onDeleteMotive {
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
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag {
    onCreateTag {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag {
    onUpdateTag {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag {
    onDeleteTag {
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
export const onCreatePublicUser = /* GraphQL */ `
  subscription OnCreatePublicUser {
    onCreatePublicUser {
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
export const onUpdatePublicUser = /* GraphQL */ `
  subscription OnUpdatePublicUser {
    onUpdatePublicUser {
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
export const onDeletePublicUser = /* GraphQL */ `
  subscription OnDeletePublicUser {
    onDeletePublicUser {
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
export const onCreatePrivateUser = /* GraphQL */ `
  subscription OnCreatePrivateUser($owner: String) {
    onCreatePrivateUser(owner: $owner) {
      id
      username
      email
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePrivateUser = /* GraphQL */ `
  subscription OnUpdatePrivateUser($owner: String) {
    onUpdatePrivateUser(owner: $owner) {
      id
      username
      email
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePrivateUser = /* GraphQL */ `
  subscription OnDeletePrivateUser($owner: String) {
    onDeletePrivateUser(owner: $owner) {
      id
      username
      email
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateFollow = /* GraphQL */ `
  subscription OnCreateFollow {
    onCreateFollow {
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
export const onUpdateFollow = /* GraphQL */ `
  subscription OnUpdateFollow {
    onUpdateFollow {
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
export const onDeleteFollow = /* GraphQL */ `
  subscription OnDeleteFollow {
    onDeleteFollow {
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
export const onCreateYay = /* GraphQL */ `
  subscription OnCreateYay {
    onCreateYay {
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
export const onUpdateYay = /* GraphQL */ `
  subscription OnUpdateYay {
    onUpdateYay {
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
export const onDeleteYay = /* GraphQL */ `
  subscription OnDeleteYay {
    onDeleteYay {
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
export const onCreateNay = /* GraphQL */ `
  subscription OnCreateNay {
    onCreateNay {
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
export const onUpdateNay = /* GraphQL */ `
  subscription OnUpdateNay {
    onUpdateNay {
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
export const onDeleteNay = /* GraphQL */ `
  subscription OnDeleteNay {
    onDeleteNay {
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
