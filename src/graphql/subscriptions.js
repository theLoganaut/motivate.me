/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePublicUser = /* GraphQL */ `
  subscription OnCreatePublicUser {
    onCreatePublicUser {
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
export const onUpdatePublicUser = /* GraphQL */ `
  subscription OnUpdatePublicUser {
    onUpdatePublicUser {
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
export const onDeletePublicUser = /* GraphQL */ `
  subscription OnDeletePublicUser {
    onDeletePublicUser {
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
export const onCreatePrivateUser = /* GraphQL */ `
  subscription OnCreatePrivateUser($username: String) {
    onCreatePrivateUser(username: $username) {
      id
      username
      email
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePrivateUser = /* GraphQL */ `
  subscription OnUpdatePrivateUser($username: String) {
    onUpdatePrivateUser(username: $username) {
      id
      username
      email
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePrivateUser = /* GraphQL */ `
  subscription OnDeletePrivateUser($username: String) {
    onDeletePrivateUser(username: $username) {
      id
      username
      email
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
