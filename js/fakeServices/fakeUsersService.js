// TODO: Refactor get UserData and getUsersData to be one function

import store from '../store/store.js'
import fakeAuthService from './fakeAuthService.js'

const users = store.getState('users')

const getUserData = username => {
  const currentUser = users[fakeAuthService.getCurrentUser()]

  const userData = {
    ...users[username],
    username,
    isFollowed: currentUser.followings.has(username)
  }
  return userData
}

const getUsersData = usersnames => {
  const currentUser = users[fakeAuthService.getCurrentUser()]

  const usersData = usersnames.map(username => ({
    ...users[username],
    username,
    isFollowed: currentUser.followings.has(username)
  }))
  console.log(usersData)
  return usersData
}

// *Follow user
const handleFollowUser = username => {
  // [1] if the user is already followed
  // [2]    unfollow this user
  // [3] else follow him

  const currentUser = users[fakeAuthService.getCurrentUser()]

  if (currentUser.followings.has(username))
    return store.dispatch({
      slice: 'users',
      type: 'unfollowUser',
      payload: { username }
    })

  // Else
  return store.dispatch({
    slice: 'users',
    type: 'followUser',
    payload: { username }
  })
}

export default { getUserData, getUsersData, handleFollowUser }
