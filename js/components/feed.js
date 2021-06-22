import tweet from './common/tweet.js'

export default function homeFeed (tweets) {
  const feed = document.createElement('section')
  feed.className = 'home-feed'

  tweets.map(tweetData => feed.appendChild(tweet(tweetData)))

  return feed
}
