/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPublicUser = /* GraphQL */ `
  query GetPublicUser($id: ID!) {
    getPublicUser(id: $id) {
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
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        comments {
          nextToken
        }
        createdAt
        updatedAt
        publicUserPostsId
        owner
      }
      nextToken
    }
  }
`;

export const listPostsWithComments = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        comments {
          items {
            content
            owner
          }
        }
        createdAt
        updatedAt
        publicUserPostsId
        owner
      }
      nextToken
    }
  }
`;

export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        post {
          id
          content
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
      nextToken
    }
  }
`;
