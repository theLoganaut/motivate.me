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
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
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
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
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
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
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
export const createPublicUser = /* GraphQL */ `
  mutation CreatePublicUser(
    $input: CreatePublicUserInput!
    $condition: ModelPublicUserConditionInput
  ) {
    createPublicUser(input: $input, condition: $condition) {
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
export const updatePublicUser = /* GraphQL */ `
  mutation UpdatePublicUser(
    $input: UpdatePublicUserInput!
    $condition: ModelPublicUserConditionInput
  ) {
    updatePublicUser(input: $input, condition: $condition) {
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
export const deletePublicUser = /* GraphQL */ `
  mutation DeletePublicUser(
    $input: DeletePublicUserInput!
    $condition: ModelPublicUserConditionInput
  ) {
    deletePublicUser(input: $input, condition: $condition) {
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
export const createPrivateUser = /* GraphQL */ `
  mutation CreatePrivateUser(
    $input: CreatePrivateUserInput!
    $condition: ModelPrivateUserConditionInput
  ) {
    createPrivateUser(input: $input, condition: $condition) {
      id
      username
      email
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePrivateUser = /* GraphQL */ `
  mutation UpdatePrivateUser(
    $input: UpdatePrivateUserInput!
    $condition: ModelPrivateUserConditionInput
  ) {
    updatePrivateUser(input: $input, condition: $condition) {
      id
      username
      email
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePrivateUser = /* GraphQL */ `
  mutation DeletePrivateUser(
    $input: DeletePrivateUserInput!
    $condition: ModelPrivateUserConditionInput
  ) {
    deletePrivateUser(input: $input, condition: $condition) {
      id
      username
      email
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
export const createVote = /* GraphQL */ `
  mutation CreateVote(
    $input: CreateVoteInput!
    $condition: ModelVoteConditionInput
  ) {
    createVote(input: $input, condition: $condition) {
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
export const updateVote = /* GraphQL */ `
  mutation UpdateVote(
    $input: UpdateVoteInput!
    $condition: ModelVoteConditionInput
  ) {
    updateVote(input: $input, condition: $condition) {
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
export const deleteVote = /* GraphQL */ `
  mutation DeleteVote(
    $input: DeleteVoteInput!
    $condition: ModelVoteConditionInput
  ) {
    deleteVote(input: $input, condition: $condition) {
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
