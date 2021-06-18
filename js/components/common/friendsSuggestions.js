import user from './user.js'

export default function friendsSuggestions () {
  return `
	<!-- People to follow -->
		<div class="block who-to-follow">
			<h3 class="block__heading">Who to follow</h3>
			<div class="block__body">
				${user()}
				${user()}
				${user()}
			</div>
			<div class="show-more">
				<a href="#conect">Show more</a>
			</div>
		</div>
		`
}
