import Twitter from 'twitter';
import dotenv from 'dotenv';
dotenv.config();

const twitter = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  bearer_token: process.env.TWITTER_BEARER_TOKEN
});

export const getFollowersIds = async username => {
  return await twitter.get('followers/ids', {screen_name: username});
};

export const getFollowers = async (username, limit) => {
  return await twitter.get('friends/list', {screen_name: username, count: limit});
};

export const getUserTimeline = async (username, limit) => {
  return await twitter.get('statuses/user_timeline', {screen_name: username, count: limit});
};

export const getUserMentions = async (username, limit) => {
  return await twitter.get('statuses/mentions_timeline', {screen_name: username, count: limit});
};

// Returns fully-hydrated user objects for up to 100 users per request, as specified by comma-separated values passed to the user_id and/or screen_name parameters.
export const getUsers = async (usernames, limit) => {
  return await twitter.get('users/lookup', {screen_name: usernames.join(","), count: limit});
};

export const getUsersByIds = async (ids, limit) => {
  return await twitter.get('users/lookup', {user_id: ids.join(","), count: limit});
};

// Returns the 20 most recent Tweets liked by the authenticating or specified user.
export const getLikes = async (username, limit) => {
  return await twitter.get('favorites/list', {screen_name: username, count: limit});
};

// Returns a collection of the 100 most recent retweets of the Tweet specified by the id parameter.
export const getRetweets = async (tweetId, limit) => {
  return await twitter.get('/statuses/retweets', {id: tweetId, count: limit});
};