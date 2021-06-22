import fakeAuthService from '../fakeServices/fakeAuthService.js'

export default (users, action) => {
  let newUserId = Object.keys(users).length
  // Users Actions

  // Copying the state to another variable to avoid direct mutation
  let updatedUsers = { ...users }

  // * Creating new user (Registering)
  if (action.type === 'createUser') {
    const { name, username, image, coverImage, bio } = action.payload
    updatedUsers[newUserId] = {
      name,
      username,
      image,
      coverImage,
      bio,
      followersIds: new Set(),
      followingIds: new Set(),
      tweetsIds: new Set(),
      likedTweets: new Set()
    }
  }
  // * add new tweet to tweets list
  else if (action.type === 'addTweet') {
    const userId = fakeAuthService.getCurrentUser().id
    updatedUsers[userId].tweetsIds.add(action.payload.tweetId)
  }
  // * Add tweet to liked tweets
  else if (action.type === 'likeTweet') {
    const userId = fakeAuthService.getCurrentUser().id
    updatedUsers[userId].likedTweets.add(action.payload.tweetId)
  }
  // * Remove tweet from liked tweets
  else if (action.type === 'unlikeTweet') {
    const userId = fakeAuthService.getCurrentUser().id
    updatedUsers[userId].likedTweets.delete(action.payload.tweetId)
  }

  return updatedUsers
}
