export default class User {

  constructor(twitterObject) {
    this.id = twitterObject.id_str;
    this.name = twitterObject.name;
    this.username = twitterObject.screen_name;
    this.location = twitterObject.location;
    this.description = twitterObject.description.replace(/"/g, "'");
    this.url = twitterObject.url;
    this.followers_count = twitterObject.followers_count;
    this.created = twitterObject.created_at;
    this.profile_img = twitterObject.profile_img_url;
  }

  print() {
    console.log({
      id: this.id,
      name: this.name,
      username: this.username,
      url: this.url
    })
  }
}