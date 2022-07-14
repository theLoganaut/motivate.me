var aws = require("aws-sdk");
var ddb = new aws.DynamoDB();

exports.handler = async (event, context) => {
  let date = new Date();

  if (event.request.userAttributes.sub) {
    let params = {
      Item: {
        id: { S: event.request.userAttributes.sub },
        __typename: { S: "User" },
        username: { S: event.userName },
        email: { S: event.request.userAttributes.email },
        createdAt: { S: date.toISOString() },
        updateAt: { S: date.toISOString() },
      },
      TableName: process.env.USERTABLE,
    };
    try {
      await ddb.putItem(params).promise();
    } catch (err) {
      console.log("Error Putting in Dynamo", err);
    }
    // context.done(null, event);
    return null;
  } else {
    console.log("Error; Nothing written to Dynamo");
    console.log(null, event);
  }
};
