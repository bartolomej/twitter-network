export default class Tweet {

  constructor(twitterObject) {
    this.id = twitterObject.id_str;
    this.user = twitterObject.user.screen_name;
    this.created = twitterObject.created_at;
    this.text = twitterObject.text.replace(/"/g, "'").replace('-', '_');
    this.retweet_count = twitterObject.retweet_count;
    this.user_mentions = twitterObject.entities.user_mentions.map(user => user.screen_name);
    this.like_count = twitterObject.favorite_count;
  }

  print() {
    console.log({
      id: this.id,
      user: this.user,
      text: this.text,
      created: this.created
    })
  }
}