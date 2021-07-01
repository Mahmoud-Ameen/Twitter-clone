import store from './store.js'

export default (authState, action) => {
  let updatedAuth = { ...authState }

  const users = store.getState('users')

  // * Login
  if (action.type === 'login') {
    const { username, password } = action.payload
    console.log('username', username)
    if (users[username] && users[username].password === password) {
      updatedAuth.currentUser = username
    } else {
      throw Error(
        "the username and password you entered don't match our records"
      )
    }
  }

  // * Log out
  else if (action.type === 'logout') {
    updatedAuth.currentUser = undefined
  }
  return updatedAuth
}
