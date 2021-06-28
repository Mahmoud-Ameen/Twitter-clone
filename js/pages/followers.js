import sidebar from '../components/common/sidebar.js'
import navbar from '../components/common/navbar.js'
import UsersList from '../components/common/usersList.js'
import fakeUsersService from '../fakeServices/fakeUsersService.js'
import Tabs from '../components/tabs.js'

export default function followersPage (username) {
  const dom = document.createElement('div')
  dom.id = 'followers'

  const user = fakeUsersService.getUserData(username)
  const followersData = fakeUsersService.getUsersData(
    Array.from(user.followers)
  )

  dom.innerHTML = `
	<div id='page-layout'>
		<!-- #region navbar -->
		<link rel="stylesheet" href="../../css/followings.min.css">
		<div class="navbarContainer"></div>
		<!-- #endregion  -->
		<main id="main-section" class="followings">

			<!-- #region heading -->
			<div class="heading">
				<div>
					<span class="icon color-primary back-btn">
						<svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path></g></svg>
					</span>
					<span>
						<h1 class="user__name">${user.name}</h1>
						<span class="username">@${user.username}</span>
					</span>
				</div>
			</div>
			<!-- #endregion -->
			${Tabs([
        { title: 'Followings', linkTo: `#followings?${username}` },
        { title: 'Followers', active: true }
      ])}
			<!-- #region followings  -->
			<div class="usersContainer"></div>
			<!-- #endregion -->
		</main>

		<div class="sidebarContainer"></div>
		<!-- #region sidebar -->
		<!-- #endregion -->
	</div>
	`

  dom.querySelector('.navbarContainer').appendChild(navbar())
  dom.querySelector('.sidebarContainer').appendChild(sidebar())

  dom.querySelector('.usersContainer').appendChild(UsersList(followersData))

  // Event Listiners
  dom.querySelector('.back-btn').onclick = () => history.back()

  return dom
}
