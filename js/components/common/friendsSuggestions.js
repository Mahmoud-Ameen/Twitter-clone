import UsersList from './usersList.js'

export default function friendsSuggestions (usersData) {
  const dom = document.createElement('div')
  dom.innerHTML = `
	<!-- People to follow -->
		<div class="block who-to-follow">
			<p class="block__heading">Who to follow</p>
			<div class="block__body">
				
			</div>
			<div class="show-more">
				<a href="#conect">Show more</a>
			</div>
		</div>
		`
  dom.querySelector('.block__body').appendChild(UsersList(usersData))
  return dom
}
