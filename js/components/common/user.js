import fakeAuthService from '../../fakeServices/fakeAuthService.js'
import fakeUsersService from '../../fakeServices/fakeUsersService.js'

export default function user (userData) {
  const currentUser = fakeAuthService.getCurrentUser()
  const dom = document.createElement('div')
  dom.innerHTML = `
			<div class="user">
				<div class="user__image">
					<a href=${'#user?' + userData.username}>
						<img width="48px" height="48px" alt="user name" draggable="true" src=${
              userData.image
            }>
					</a>
				</div>
				<div class="user__info">
					<!-- This div is just for grouping -->
					<div>
						<span class="user__name"> <a href=${'#user?' + userData.username}>${
    userData.name
  } </a></span>
						<span class="user__username">@<a href=${'#user?' + userData.username}>${
    userData.username
  } </a></span>
					</div>
					${
            userData.username === currentUser
              ? ''
              : `<button class='btn btn--outline toggleFollow'>
                ${userData.isFollowed ? 'Unfollow' : 'Follow'}
              </button>`
          }
				</div>
			</div>
	`

  // Event listiners
  try {
    dom.querySelector('.toggleFollow').addEventListener('click', () => {
      fakeUsersService.handleFollowUser(userData.username)
    })
  } catch {}

  return dom
}
