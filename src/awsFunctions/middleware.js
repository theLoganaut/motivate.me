var aws = require("aws-sdk");
var ddb = new aws.DynamoDB();

exports.handler = async (event, context) => {
  let date = new Date();

  if (event.request.userAttributes.sub) {
    let params = {
      Item: {
        id: { $: event.request.userAttributes.sub },
        __typename: { $: "User" },
        username: { $: event.userName },
        email: { $: event.request.userAttributes.email },
        createdAt: { $: date.toISOString() },
        updateAt: { $: date.toISOString() },
      },
      TableName: process.env.USERTABLE,
    };
    try {
      await ddb.putItem(params);
    } catch (err) {
      console.log("Error Putting in Dynamo", err);
    }
    context.done(null, event);
  } else {
    console.log("Error; Nothing written to Dynamo");
    console.log(null, event);
  }
};
