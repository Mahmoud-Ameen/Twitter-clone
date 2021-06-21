import tweetsService from '../fakeServices/fakeTweetsService.js'
import store from '../store/store.js'
import tweet from './common/tweet.js'

export default function homeFeed () {
  let tweets = tweetsService.getHomeFeed()

  const feed = document.createElement('section')
  feed.className = 'home-feed'
  feed.innerHTML = `${tweets.map(tweetData => tweet(tweetData))} `

  return feed
}
