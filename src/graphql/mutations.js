/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBoost = /* GraphQL */ `
  mutation CreateBoost(
    $input: CreateBoostInput!
    $condition: ModelBoostConditionInput
  ) {
    createBoost(input: $input, condition: $condition) {
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
export const updateBoost = /* GraphQL */ `
  mutation UpdateBoost(
    $input: UpdateBoostInput!
    $condition: ModelBoostConditionInput
  ) {
    updateBoost(input: $input, condition: $condition) {
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
export const deleteBoost = /* GraphQL */ `
  mutation DeleteBoost(
    $input: DeleteBoostInput!
    $condition: ModelBoostConditionInput
  ) {
    deleteBoost(input: $input, condition: $condition) {
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
export const createMotive = /* GraphQL */ `
  mutation CreateMotive(
    $input: CreateMotiveInput!
    $condition: ModelMotiveConditionInput
  ) {
    createMotive(input: $input, condition: $condition) {
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
export const updateMotive = /* GraphQL */ `
  mutation UpdateMotive(
    $input: UpdateMotiveInput!
    $condition: ModelMotiveConditionInput
  ) {
    updateMotive(input: $input, condition: $condition) {
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
export const deleteMotive = /* GraphQL */ `
  mutation DeleteMotive(
    $input: DeleteMotiveInput!
    $condition: ModelMotiveConditionInput
  ) {
    deleteMotive(input: $input, condition: $condition) {
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
export const createPublicUser = /* GraphQL */ `
  mutation CreatePublicUser(
    $input: CreatePublicUserInput!
    $condition: ModelPublicUserConditionInput
  ) {
    createPublicUser(input: $input, condition: $condition) {
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
export const updatePublicUser = /* GraphQL */ `
  mutation UpdatePublicUser(
    $input: UpdatePublicUserInput!
    $condition: ModelPublicUserConditionInput
  ) {
    updatePublicUser(input: $input, condition: $condition) {
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
export const deletePublicUser = /* GraphQL */ `
  mutation DeletePublicUser(
    $input: DeletePublicUserInput!
    $condition: ModelPublicUserConditionInput
  ) {
    deletePublicUser(input: $input, condition: $condition) {
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
export const createFollow = /* GraphQL */ `
  mutation CreateFollow(
    $input: CreateFollowInput!
    $condition: ModelFollowConditionInput
  ) {
    createFollow(input: $input, condition: $condition) {
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
export const updateFollow = /* GraphQL */ `
  mutation UpdateFollow(
    $input: UpdateFollowInput!
    $condition: ModelFollowConditionInput
  ) {
    updateFollow(input: $input, condition: $condition) {
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
export const deleteFollow = /* GraphQL */ `
  mutation DeleteFollow(
    $input: DeleteFollowInput!
    $condition: ModelFollowConditionInput
  ) {
    deleteFollow(input: $input, condition: $condition) {
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
export const createYay = /* GraphQL */ `
  mutation CreateYay(
    $input: CreateYayInput!
    $condition: ModelYayConditionInput
  ) {
    createYay(input: $input, condition: $condition) {
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
export const updateYay = /* GraphQL */ `
  mutation UpdateYay(
    $input: UpdateYayInput!
    $condition: ModelYayConditionInput
  ) {
    updateYay(input: $input, condition: $condition) {
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
export const deleteYay = /* GraphQL */ `
  mutation DeleteYay(
    $input: DeleteYayInput!
    $condition: ModelYayConditionInput
  ) {
    deleteYay(input: $input, condition: $condition) {
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
export const createNay = /* GraphQL */ `
  mutation CreateNay(
    $input: CreateNayInput!
    $condition: ModelNayConditionInput
  ) {
    createNay(input: $input, condition: $condition) {
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
export const updateNay = /* GraphQL */ `
  mutation UpdateNay(
    $input: UpdateNayInput!
    $condition: ModelNayConditionInput
  ) {
    updateNay(input: $input, condition: $condition) {
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
export const deleteNay = /* GraphQL */ `
  mutation DeleteNay(
    $input: DeleteNayInput!
    $condition: ModelNayConditionInput
  ) {
    deleteNay(input: $input, condition: $condition) {
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
