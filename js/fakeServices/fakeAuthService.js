import store from '../store/store.js'

const getCurrentUser = () => store.getState('auth').currentUser

// * Log in
const logIn = (username, password) => {
  store.dispatch({
    slice: 'auth',
    type: 'login',
    payload: { username, password }
  })
}

// * Log out
const logOut = () => {
  store.dispatch({
    slice: 'auth',
    type: 'logout'
  })
}

export default { getCurrentUser, logIn, logOut }
