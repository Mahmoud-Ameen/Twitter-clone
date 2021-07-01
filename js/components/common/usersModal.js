import store from '../../store/store.js'
import UsersList from './usersList.js'

export default function usersModal (users, title, closeFunc) {
  const dom = document.createElement('div')
  dom.innerHTML = `

		<section id="usersModalBackground" class="modalContainer">
			<div id="usersModal" >
					<header class="heading">

							<div>
								<span class="icon color-primary close-btn">
									<svg viewBox="0 0 24 24" aria-hidden="true" class="r-13gxpu9 r-4qtqp9 r-yyyyoo r-179l7hd r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-10uooop"><g><path d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"></path></g></svg>								</span>
								<span>
									<h1>${title}</h1>
								</span>
							</div>
							<span> </span>

					</header>
					<div class="usersListContainer"></div>
			</div>
		</section>
	
	`

  dom.querySelector('.close-btn').onclick = closeFunc

  const loadUsers = () => {
    dom.querySelector('.usersListContainer').innerHTML = ''
    dom.querySelector('.usersListContainer').appendChild(UsersList(users))
  }
  loadUsers()
  store.subscribe('users', loadUsers)
  return dom
}
