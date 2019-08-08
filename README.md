# Twitter networks

### .env config

```
PORT=<port_number>
MODE=<enviroment>
TWITTER_CONSUMER_KEY=<token>
TWITTER_CONSUMER_SECRET=<token>
TWITTER_ACCESS_TOKEN_KEY=<token>
TWITTER_ACCESS_TOKEN_SECRET=<token>
TWITTER_BEARER_TOKEN=<token>
```

## Twitter API

**[Twitter API reference index](https://developer.twitter.com/en/docs/api-reference-index)**


##### 1. Get followers ids list of 'twitterdev'.
```bash
curl --request GET 
  --url 'https://api.twitter.com/1.1/followers/ids.json?screen_name=twitterdev' 
  --header 'authorization: OAuth oauth_consumer_key="consumer-key-for-app", 
  oauth_nonce="generated-nonce", oauth_signature="generated-signature", 
  oauth_signature_method="HMAC-SHA1", oauth_timestamp="generated-timestamp", 
  oauth_version="1.0"'
```

##### 2. Twitter search
```bash
curl --request POST \
  --url https://api.twitter.com/1.1/tweets/search/fullarchive/experiments.json \
  --header 'authorization: Bearer <token>' \
  --header 'content-type: application/json' \
  --data '{
                "query":"from:TwitterDev lang:en",
                "maxResults": "100",
                "fromDate":"201802010000",
                "toDate":"201802282359"
          }'
```

## TODO

- [ ] Extract useful Cypher queries - help with [this](https://www.remwebdevelopment.com/blog/sql/some-basic-and-useful-cypher-queries-for-neo4j-201.html) website
- [ ] Cypher MATCH patterns [guide](https://neo4j.com/docs/cypher-manual/current/clauses/match/#match-variable-length-relationships)
- [ ] Learn from [example project](https://neo4j.com/developer/example-project/)
- [ ] Subscribe to account activity [here](https://developer.twitter.com/en/docs/accounts-and-users/subscribe-account-activity/api-reference/aaa-premium)
- [ ] Setup streaming network activity with [web-sockets](https://www.npmjs.com/package/express-ws)

