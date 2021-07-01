import fakeUsersService from '../../fakeServices/fakeUsersService.js'
import store from '../../store/store.js'
import user from './user.js'

export default function UsersList (users) {
  const dom = document.createElement('div')

  const loadUsers = () => {
    const usersData = fakeUsersService.getUsersData(users)
    dom.innerHTML = ''
    usersData.forEach(userData => {
      dom.appendChild(user(userData))
    })
  }

  loadUsers()
  store.subscribe('users', loadUsers)
  return dom
}
