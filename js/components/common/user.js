export default function user () {
  return `
		<div class="user">
			<div class="user__image">
				<img alt="user name" draggable="true" src="https://pbs.twimg.com/profile_images/595659104384905218/bOtXKmdP_normal.jpg">			</div>
			<div class="user__info">
				<!-- This div is just for grouping -->
				<div>
					<span class="user__name">Florin Pop</span>
					<span class="user__username">@florinpop1705</span>
				</div>
				<button class="btn btn--outline follow">follow</button>
			</div>
		</div>
	`
}
