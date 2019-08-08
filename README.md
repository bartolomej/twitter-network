# Twitter networks

#### Twitter API:
- Get Tweet timelines (https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-user_timeline.html)
- Search Tweets (https://developer.twitter.com/en/docs/tweets/search/overview)
- Subscribe to account activity (https://developer.twitter.com/en/docs/accounts-and-users/subscribe-account-activity/overview)
- Get Tweet Engagements (https://developer.twitter.com/en/docs/metrics/get-tweet-engagement/overview)
- Follow, search, and get users (https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/overview)

## Twitter sample API requests:

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