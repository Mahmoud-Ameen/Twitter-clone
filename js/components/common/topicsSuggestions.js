import topic from './topic'

export default function name (params) {
  return `
	<div class='block topics-to-follow'>
		<p class='block__heading'>Topics to follow</p>
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
