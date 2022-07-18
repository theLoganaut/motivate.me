var aws = require("aws-sdk");
var ddb = new aws.DynamoDB();

exports.handler = async (event, context) => {
  let date = new Date();

  if (event.request.userAttributes.sub) {
    let privateUserParams = {
      Item: {
        id: { S: event.request.userAttributes.sub },
        __typename: { S: "PrivateUser" },
        username: { S: event.userName },
        email: { S: event.request.userAttributes.email },
        createdAt: { S: date.toISOString() },
        updateAt: { S: date.toISOString() },
      },
      TableName: process.env.USERTABLESAFE,
    };
    let publicUserParams = {
      Item: {
        id: { S: event.request.userAttributes.sub },
        __typename: { S: "PublicUser" },
        username: { S: event.userName },
        createdAt: { S: date.toISOString() },
        updateAt: { S: date.toISOString() },
      },
      TableName: process.env.USERTABLEPUBLIC,
    };
    try {
      await ddb.putItem(privateUserParams).promise();
    } catch (err) {
      console.log("Error Creating Private User", err);
    }
    try {
      await ddb.putItem(publicUserParams).promise();
    } catch (err) {
      console.log(
        "Error Creating Public User, please delete the private user, and try again.",
        err
      );
    }
    // context.done(null, event);
    return null;
  } else {
    console.log("Error; Nothing written to Dynamo");
    console.log(null, event);
  }
};
