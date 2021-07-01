import tweetsReducer from './tweetsReducer.js'
import usersReducer from './usersReducer.js'
import authReducer from './authReducer.js'

export default (state, action) => {
  // This should pass the action and state to
  // the reducer responsible for this slice
  switch (action.slice) {
    case 'users':
      return usersReducer(state, action)

    case 'tweets':
      return tweetsReducer(state, action)

    case 'auth':
      return authReducer(state, action)

    default:
      return state
  }
}
