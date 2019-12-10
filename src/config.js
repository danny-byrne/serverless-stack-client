export default {
  s3: {
    REGION: "us-west-1",
    BUCKET: "db-notes-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://w2qxy9442a.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_A4gAznrDD",
    APP_CLIENT_ID: "6g1ae5nm8p6u5cd7f68li7rhvv",
    IDENTITY_POOL_ID: "us-east-2:bcd2e43f-d384-4e24-8919-7cdff424068c"
  }
};