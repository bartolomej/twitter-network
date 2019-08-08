import neo4j from 'neo4j-driver';

const driver = neo4j.driver('bolt://localhost', neo4j.auth.basic('neo4j', 'twitter'));
let session = driver.session();

export const saveUser = async (user) => {
  await session
    .run(`CREATE (:User {
      id: '${user.id}',
      username: '${user.username}',
      location: '${user.location}',
      description: "${user.description}",
      url: '${user.url}',
      followers_count: ${user.followers_count},
      created: '${user.created}',
      profile_img: '${user.profile_img}'
    })`);
  return user;
};

export const addFollowerRelation = async (fromUser, toUser) => {
  await session
    .run(`MATCH (from:User {id: '${fromUser}'}), (to:User {id: '${toUser}'})` +
      `CREATE (from) - [:FOLLOWS] -> (to)`
    );
};

export const addRetweet = async (tweetId, userId) => {
  await session
    .run(`MATCH (t:Tweet {id: '${tweetId}'}), (u:User {id: '${userId}'})` +
      `CREATE (t) - [:RETWEETED] -> (u)`
    );
};

export const saveTweet = async (tweet) => {
  await session
    .run(`CREATE (t:Tweet {
      id: '${tweet.id}',
      text: "${tweet.text}",
      retweet_count: ${tweet.retweet_count},
      like_count: '${tweet.like_count}',
      created: '${tweet.created}'
    })`);
  await session
    .run(`MATCH (t:Tweet {id: '${tweet.id}'}), (u:User {username: '${tweet.user}'}) ` +
      `CREATE (t) - [:TWEETED] -> (u)`
    );
  if (tweet.user_mentions.length === 0) return;
  await session
    .run(`MATCH (t:Tweet {id: '${tweet.id}'}) CREATE ` +
      tweet.user_mentions.map(username =>
        `(t) - [:MENTIONED] -> (:User {username: '${username}'}) `));
  return tweet;
};

export const getTweets = async (limit) => {
  return await session
    .run('MATCH(n:Tweet) RETURN n LIMIT 25');
};

export const getUsers = async (limit) => {
  let users = await session
    .run(`MATCH(n:User) RETURN n LIMIT ${limit}`);
  return users.records.map(user => user._fields[0].properties)
};

export const getGraph = async (limit) => {
  return await session
    .run(`START n=node(*) MATCH (n)-[r]->(m) RETURN n,r,m ${limit ? `LIMIT ${limit}` : ''}`);
};