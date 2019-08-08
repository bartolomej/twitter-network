import {
  getFollowers,
  getUserTimeline,
  getRetweets,
  getUsers
} from './client';
import {
  addFollowerRelation, addRetweet,
  saveTweet,
  saveUser
} from './db';
import User from './models/User';
import Tweet from "./models/Tweet";


export const loadUsers = async (usernames, limit) => {
  let users = await getUsers(usernames, limit);
  users.forEach(async tweeterUser => {
    let user = await saveUser(new User(tweeterUser));
    let followers = await getFollowers(user.username, limit);
    let latestTweets = await getUserTimeline(user.username, limit);

    try {
      followers.users.forEach(async rawFollower => {
        let follower = await saveUser(new User(rawFollower));
        await addFollowerRelation(follower.id, user.id);
      });
      latestTweets.forEach(async rawTweet => {
        let tweet = await saveTweet(new Tweet(rawTweet));
        if (tweet.id === undefined) {
          console.log(tweet)
        }
        let retweets = await getRetweets(tweet.id);
        retweets.forEach(async retweet => {
          let user = await saveUser(new User(retweet.user));
          await addRetweet(retweet.id, user.id);
        })
      });
    } catch (e) {
      console.log(e);
    }
  });
};