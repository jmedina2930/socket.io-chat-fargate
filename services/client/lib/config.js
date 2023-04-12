var AWS = require('aws-sdk');

console.log('dynamo endpoint...',process.env.DYNAMODB_ENDPOINT);
console.log('redis endpoint...',process.env.REDIS_ENDPOINT);

module.exports = {
  ENV_NAME: process.env.ENV_NAME,

  PORT: process.env.PORT || 3000,
  REGION: process.env.REGION || 'us-east-1',

  REDIS_ENDPOINT: process.env.REDIS_ENDPOINT,
  DYNAMODB_ENDPOINT: process.env.DYNAMODB_ENDPOINT,

  // Controls how often clients ping back and forth
  HEARTBEAT_TIMEOUT: 8000,
  HEARTBEAT_INTERVAL: 4000
};

module.exports.SELF_URL = process.env.SELF_URL || 'http://localhost:' + module.exports.PORT;
