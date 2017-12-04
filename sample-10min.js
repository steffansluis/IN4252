require("dotenv").load({ silent: true });

const Twit = require('twit');

const client = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

const _10_MIN = 1000 * 60 * 10;

const stream = client.stream('statuses/sample');

stream.on('tweet', function(tweet) {
  console.log(JSON.stringify(tweet), "\n"); // Logging it this way allows the output to be piped to a .ndjson file
});

stream.on('error', function(error) {
  console.error(error);
});

setTimeout(() => process.exit(0), _10_MIN);
