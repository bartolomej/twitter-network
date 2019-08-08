const Twitter = require('twitter');
require('dotenv').config();

const twitter = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  bearer_token: process.env.TWITTER_BEARER_TOKEN
});

// get followers ids that follow 'screen_name'
/*
twitter.get('followers/ids', { screen_name: 'tolga_tezel' },  function (err, data, response) {
  console.log(data)
});
*/

// get followers ids that follow 'screen_name'
/*
twitter.get('friends/list', { screen_name: 'tolga_tezel' },  function (err, data, response) {
  console.log(data)
});
*/

// get tweets from user timeline
/*
twitter.get('statuses/user_timeline', { screen_name: 'tolga_tezel', count: 1 },  function (err, data, response) {
  console.log(data)
});
*/

/*
twitter.get('/statuses/mentions_timeline', { screen_name: 'tolga_tezel', count: 1 },  function (err, data, response) {
  console.log(data)
});
*/


twitter.get('statuses/user_timeline', {screen_name: 'nodejs'}, function(error, data, response) {
  console.log(data)
});


/* WITH PROMISES
client.post('statuses/update', {status: 'I Love Twitter'})
  .then(function (tweet) {
    console.log(tweet);
  })
  .catch(function (error) {
    throw error;
  })
 */