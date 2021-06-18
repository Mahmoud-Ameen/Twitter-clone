import tweet from './common/tweet.js'

export default function homeFeed () {
  return `
		<section class="home-feed">
			${tweet()}
			${tweet()}
			${tweet()}
			${tweet()}
			${tweet()}
			${tweet()}
		</section>
	`
}
