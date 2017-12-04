require("dotenv").load({ silent: true });

const Twitter = require('twitter');
const Twit = require('twit');

const client = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

const _2_HOURS = 1000 * 60 * 120;

// https://www.gps-latitude-longitude.com/gps-coordinates-of-amsterdam
// Longitude of Amsterdam: 4.895168
// Latitude of Amsterdam: 52.370216
// const params = {};
const amsterdam = ['3.89', '51.37', '4.89', '52.37'];
// const params = { locations: sanFrancisco };
const params = { locations: amsterdam };

// console.log('Making request with:', params);
const stream = client.stream('statuses/filter', params);

// client.stream('statuses/filter', params,  function(stream) {
  stream.on('tweet', function(tweet) {
    console.log(JSON.stringify(tweet), "\n"); // Logging it this way allows the output to be piped to a .ndjson file
  });

  stream.on('error', function(error) {
    console.error(error);
  });

  setTimeout(() => process.exit(0), _2_HOURS);
// });
