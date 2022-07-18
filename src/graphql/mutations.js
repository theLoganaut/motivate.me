/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPublicUser = /* GraphQL */ `
  mutation CreatePublicUser(
    $input: CreatePublicUserInput!
    $condition: ModelPublicUserConditionInput
  ) {
    createPublicUser(input: $input, condition: $condition) {
      id
      username
      posts {
        items {
          id
          content
          createdAt
          updatedAt
          publicUserPostsId
          owner
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          publicUserCommentsId
          postCommentsId
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
      posts {
        items {
          id
          content
          createdAt
          updatedAt
          publicUserPostsId
          owner
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          publicUserCommentsId
          postCommentsId
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
      posts {
        items {
          id
          content
          createdAt
          updatedAt
          publicUserPostsId
          owner
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          publicUserCommentsId
          postCommentsId
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
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      content
      user {
        id
        username
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          publicUserCommentsId
          postCommentsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      publicUserPostsId
      owner
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      content
      user {
        id
        username
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          publicUserCommentsId
          postCommentsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      publicUserPostsId
      owner
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      content
      user {
        id
        username
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          publicUserCommentsId
          postCommentsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      publicUserPostsId
      owner
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      content
      user {
        id
        username
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      post {
        id
        content
        user {
          id
          username
          createdAt
          updatedAt
          owner
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        publicUserPostsId
        owner
      }
      createdAt
      updatedAt
      publicUserCommentsId
      postCommentsId
      owner
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      content
      user {
        id
        username
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      post {
        id
        content
        user {
          id
          username
          createdAt
          updatedAt
          owner
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        publicUserPostsId
        owner
      }
      createdAt
      updatedAt
      publicUserCommentsId
      postCommentsId
      owner
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      content
      user {
        id
        username
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      post {
        id
        content
        user {
          id
          username
          createdAt
          updatedAt
          owner
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        publicUserPostsId
        owner
      }
      createdAt
      updatedAt
      publicUserCommentsId
      postCommentsId
      owner
    }
  }
`;
