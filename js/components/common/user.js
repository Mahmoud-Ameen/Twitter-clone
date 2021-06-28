import fakeUsersService from '../../fakeServices/fakeUsersService.js'

export default function user (userData) {
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
					<button class="btn btn--outline toggleFollow">
					${userData.isFollowed ? 'Unfollow' : 'Follow'}
					</button>
				</div>
			</div>
	`

  // Event listiners
  dom.querySelector('.toggleFollow').addEventListener('click', () => {
    fakeUsersService.handleFollowUser(userData.username)
  })

  return dom
}
