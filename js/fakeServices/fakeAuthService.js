import store from '../store/store.js'

const getCurrentUser = () => {
  let user = store.getState('auth').currentUser
  return user
}
export default { getCurrentUser }
