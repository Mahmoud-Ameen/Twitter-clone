import store from '../store/store.js'
import usersService from './fakeUsersService.js'

// Creating a new tweet
const createTweet = (text, images, links) => {
  store.dispatch({
    slice: 'tweets',
    type: 'createTweet',
    payload: {
      authorId: 0 /* replace this with the id got from auth service */,
      text,
      images,
      links
    }
  })
}

// Like a tweet
const LikeTweet = tweetId => {
  store.dispatch({
    slice: 'tweets',
    action: 'likeTweet',
    payload: {
      userId: 0 /* replace this with the id got from auth service */,
      tweetId
    }
  })
}

// generate a feed
const getHomeFeed = () => {
  const tweets = store.getState('tweets')
  let feedData = []

  for (const key in tweets) {
    let tweet = tweets[key]

    let { name, username, image, isVerified } = usersService.getUserData(
      tweet.authorId
    )
    tweet = { ...tweet, author: { name, username, image, isVerified } }

    feedData.push({ ...tweet })
  }
  return feedData
}

export default { createTweet, LikeTweet, getHomeFeed }
