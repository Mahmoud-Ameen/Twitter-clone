import fakeAuthService from '../fakeServices/fakeAuthService.js'

export default (users, action) => {
  // Users Actions

  // Copying the state to another variable to avoid direct mutation
  let updatedUsers = { ...users }

  // * Creating new user (Registering)
  if (action.type === 'createUser') {
    const { name, username, image, coverImage, bio } = action.payload
    updatedUsers[username] = {
      name,
      image,
      coverImage,
      bio,
      followers: new Set(),
      followings: new Set(),
      tweetsIds: new Set(),
      likedTweets: new Set()
    }
  }
  // * add new tweet to tweets list
  else if (action.type === 'addTweet') {
    const currentUsername = fakeAuthService.getCurrentUser()
    updatedUsers[currentUsername].tweetsIds.add(action.payload.tweetId)
  }
  // * Add tweet to liked tweets
  else if (action.type === 'likeTweet') {
    const currentUsername = fakeAuthService.getCurrentUser()
    updatedUsers[currentUsername].likedTweets.add(action.payload.tweetId)
  }
  // * Remove tweet from liked tweets
  else if (action.type === 'unlikeTweet') {
    const currentUsername = fakeAuthService.getCurrentUser()
    updatedUsers[currentUsername].likedTweets.delete(action.payload.tweetId)
  }

  // * Follow User
  else if (action.type === 'followUser') {
    const currentUsername = fakeAuthService.getCurrentUser()
    const { username } = action.payload
    updatedUsers[currentUsername].followings.add(username)
    updatedUsers[username].followers.add(currentUsername)
  }

  // * Unfollow User
  else if (action.type === 'unfollowUser') {
    const currentUsername = fakeAuthService.getCurrentUser()
    updatedUsers[currentUsername].followings.delete(action.payload.username)
    updatedUsers[action.payload.username].followers.delete(currentUsername)
  }

  return updatedUsers
}
