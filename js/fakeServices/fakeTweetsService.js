import store from '../store/store.js'
import usersService from './fakeUsersService.js'
import authService from './fakeAuthService.js'

// Creating a new tweet
const createTweet = (text, images, links) => {
  store.dispatch({
    slice: 'tweets',
    type: 'createTweet',
    payload: {
      text,
      images,
      links
    }
  })
}

// * Like a tweet
const handleLikeTweet = tweetId => {
  // Get current user id
  const currentUserId = authService.getCurrentUser().id

  // check if the user already liked this tweet
  const tweets = store.getState('tweets')
  if (tweets[tweetId].likersIds.has(currentUserId))
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
    let tweet = tweets[id]

    let { name, username, image, isVerified } = usersService.getUserData(
      tweet.authorId
    )
    tweet = {
      ...tweet,
      id: parseInt(id),
      author: { name, username, image, isVerified }
    }

    feedData.push({ ...tweet })
  }
  return feedData.reverse()
}

// get User's tweets feed
const getUserTweets = userId => {
  let { tweetsIds } = usersService.getUserData(userId)
  tweetsIds = Array.from(tweetsIds)

  console.log('tweetsIDs', tweetsIds)

  const allTweets = store.getState('tweets')

  let feedData = []

  tweetsIds.forEach(id => {
    console.log('tweetid', id)
    let tweet = allTweets[id]

    let { name, username, image, isVerified } = usersService.getUserData(
      tweet.authorId
    )
    tweet = {
      ...tweet,
      id: parseInt(id),
      author: { name, username, image, isVerified }
    }

    feedData.push({ ...tweet })
  })

  console.log(feedData)
  return feedData.reverse()
}

export default { createTweet, handleLikeTweet, getHomeFeed, getUserTweets }
