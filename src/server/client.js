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

export const getFollowers = async username => {
  return await twitter.get('friends/list', {screen_name: username});
};

export const getFollowers = async (username, limit) => {
  return await twitter.get('statuses/user_timeline', {screen_name: username, count: limit});
};

export const getFollowers = async (username, limit) => {
  return await twitter.get('statuses/mentions_timeline', {screen_name: username, count: limit});
};