require("dotenv").load({ silent: true });

const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

const _10_MIN = 1000 * 60 * 10;
const params = { };

// console.log('Making request with:', params);

client.stream('statuses/sample', params,  function(stream) {
  stream.on('data', function(tweet) {
    console.log(JSON.stringify(tweet), "\n"); // Logging it this way allows the output to be piped to a .ndjson file
  });

  stream.on('error', function(error) {
    console.error(error);
  });

  setTimeout(() => process.exit(0), _10_MIN);
});
