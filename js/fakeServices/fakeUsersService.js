import store from '../store/store.js'

const users = store.getState('users')

const getUserData = userId => users[userId]

export default { getUserData }
