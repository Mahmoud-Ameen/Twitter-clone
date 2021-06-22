import authService from '../fakeServices/fakeAuthService.js'
import store from './store.js'

export default (tweets, action) => {
  // Copying the state to another variable to avoid direct mutation
  let updatedTweets = { ...tweets }

  // * Creating a tweet
  if (action.type === 'createTweet') {
    // Get last tweet id
    let newTweetId = Object.keys(tweets).length

    // get tweet data from the action
    let { text, links, images } = action.payload
    let authorId = authService.getCurrentUser().id

    // Get and format publish date
    let publishDate = getFormattedDate()

    // Update the tweets List
    updatedTweets[newTweetId] = {
      authorId,
      text,
      links: links || [],
      images: images || [],
      publishDate,
      likersIds: new Set(),
      retweetersIds: new Set()
    }

    // add the tweet to the user's tweets list
    store.dispatch({
      slice: 'users',
      type: 'addTweet',
      payload: { tweetId: newTweetId }
    })
  }

  // * Like a tweet
  else if (action.type === 'likeTweet') {
    const { tweetId } = action.payload

    // get current logged in user id
    const userId = authService.getCurrentUser().id

    updatedTweets[tweetId].likersIds.add(userId)

    // Update the user's likedTweets list
    store.dispatch({
      slice: 'users',
      type: 'likeTweet',
      payload: { tweetId }
    })
  }

  // * Unlike a tweet *
  else if (action.type === 'unlikeTweet') {
    const { tweetId } = action.payload

    // get current logged in user id
    const userId = authService.getCurrentUser().id

    updatedTweets[tweetId].likersIds.delete(userId)

    // Update the user's likedTweets list
    store.dispatch({
      slice: 'users',
      type: 'unlikeTweet',
      payload: { tweetId }
    })
  }

  return updatedTweets
}

function getFormattedDate () {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]

  let publishDate = new Date()
  publishDate = `${
    monthNames[publishDate.getMonth()]
  } ${publishDate.getDate()} ${publishDate.getFullYear()}`
  return publishDate
}
