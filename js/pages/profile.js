import navbar from '../components/common/navbar.js';
import Feed from '../components/feed.js';
import sidebar from '../components/common/sidebar.js';
import ProfileInfo from '../components/profile-info.js';
import Tabs from '../components/tabs.js';

export default function profile() {
	return `
	<link rel="preload" as="style" href="./css/profile.min.css" />
	<link rel="stylesheet" href="./css/profile.min.css">
	<div id='page-layout'>
		<!-- #region navbar -->
		${navbar()}
		<!-- #endregion  -->
		<main id="main-section" class="profile">

			<!-- #region heading -->
			<div class="heading">
				<div>
					<span class="icon color-primary back-btn">
						<svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path></g></svg>
					</span>
					<span>
						<h1 class="user__name">React</h1>
						<span class="tweets-count">2390 Tweets</span>
					</span>
				</div>
				<button class="btn btn--outline follow">Follow</button>
			</div>
			<!-- #endregion -->
			<!-- User info -->
			${ProfileInfo()}
			<!--  tabs -->
			${Tabs()}			
			<!-- #region feed -->
			${Feed()}
			${Feed()}
			<!-- #endregion -->
		</main>

		<!-- #region sidebar -->
		${sidebar()}
		<!-- #endregion -->
	</div>
	`;
}
