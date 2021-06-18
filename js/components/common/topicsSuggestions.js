import topic from './topic'

export default function name (params) {
  return `
	<div class='block topics-to-follow'>
		<h3 class='block__heading'>Topics to follow</h3>
		<div class='block__body'>
			${topic}
			${topic}
			${topic}
		</div>
		<div class='show-more'>
			<a href='#conect'>Show more</a>
		</div>
	</div>
	`
}
