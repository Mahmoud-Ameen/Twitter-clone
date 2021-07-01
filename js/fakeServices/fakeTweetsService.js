import store from '../store/store.js'
import usersService from './fakeUsersService.js'
import authService from './fakeAuthService.js'

// Creating a new tweet
const createTweet = (text, images) => {
  store.dispatch({
    slice: 'tweets',
    type: 'createTweet',
    payload: {
      text,
      images
    }
  })
}

// * Like a tweet
const handleLikeTweet = tweetId => {
  // Get current user id
  const currentUser = authService.getCurrentUser()

  // check if the user already liked this tweet
  const tweets = store.getState('tweets')
  if (tweets[tweetId].likers.has(currentUser))
    store.dispatch({
      slice: 'tweets',
      type: 'unlikeTweet',
      payload: {
        tweetId
      }
    })
  else
    store.dispatch({
      slice: 'tweets',
      type: 'likeTweet',
      payload: {
        tweetId
      }
    })
}

// generate a home feed
const getHomeFeed = () => {
  const tweets = store.getState('tweets')
  let feedData = []

  for (const id in tweets) {
    let tweet = getTweetInfo(id)

    feedData.push({ ...tweet })
  }
  return feedData.reverse()
}

const getTweetInfo = tweetId => {
  const tweets = store.getState('tweets')

  let tweet = tweets[tweetId]

  let { name, username, image, isVerified } = usersService.getUserData(
    tweet.author
  )
  tweet = {
    ...tweet,
    id: parseInt(tweetId),
    author: { name, username, image, isVerified }
  }
  return tweet
}

// get User's tweets feed
const getUserTweets = username => {
  let { tweetsIds } = usersService.getUserData(username)
  tweetsIds = Array.from(tweetsIds)

  let feedData = []

  tweetsIds.forEach(id => {
    let tweet = getTweetInfo(id)

    feedData.push({ ...tweet })
  })

  return feedData.reverse()
}

export default {
  createTweet,
  handleLikeTweet,
  getHomeFeed,
  getUserTweets,
  getTweetInfo
}
