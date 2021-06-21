export default (users, action) => {
  let newUserId = Object.keys(users).length
  // Users Actions

  // Copying the state to another variable to avoid direct mutation
  let updatedUsers = { ...users }

  // Creating new user (Registering)
  if (action.type === 'createUser') {
    const { name, username, image, coverImage, bio } = action.payload
    console.log('lastUserId', newUserId)
    updatedUsers[newUserId] = {
      name,
      username,
      image,
      coverImage,
      bio,
      followersIds: new Set(),
      followingIds: new Set(),
      tweetsIds: new Set()
    }
  }

  return updatedUsers
}
