import store from '../../store/store.js'
import user from './user.js'

export default function UsersList (usersData) {
  const dom = document.createElement('div')

  const loadUsers = () => {
    dom.innerHTML = ''
    usersData.forEach(userData => {
      dom.appendChild(user(userData))
    })
  }

  loadUsers()
  store.subscribe('users', loadUsers)
  return dom
}
