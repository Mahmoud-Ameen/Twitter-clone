import navbar from '../components/common/navbar.js'
import Feed from '../components/feed.js'
import sidebar from '../components/common/sidebar.js'
import ProfileInfo from '../components/profileInfo.js'
import Tabs from '../components/tabs.js'
import fakeUsersService from '../fakeServices/fakeUsersService.js'
import fakeTweetsService from '../fakeServices/fakeTweetsService.js'
import store from '../store/store.js'

export default function profile (username) {
  // Get user profile data
  const userData = fakeUsersService.getUserData(username)
  console.log('userData', userData)

  const dom = document.createElement('div')
  dom.innerHTML = `
	<link rel="preload" as="style" href="./css/profile.min.css" />
	<link rel="stylesheet" href="./css/profile.min.css">
	<div id='page-layout'>
		<!-- #region navbar -->
		<header id="navbar"></header>
		<!-- #endregion  -->
		<main id="main-section" class="profile">

			<!-- #region heading -->
			<div class="heading">
				<div>
					<span class="icon color-primary back-btn">
						<svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path></g></svg>
					</span>
					<span>
						<h1 class="user__name">${userData.name}</h1>
						<span class="tweets-count">${userData.tweetsIds.size} Tweets</span>
					</span>
				</div>
				
			</div>
			<!-- #endregion -->
			<!-- User info -->
			<div class="profileInfoContainer"></div>
			<!--  tabs -->
			${Tabs([
        { title: 'Tweets', active: true },
        { title: 'Tweets & Replies' },
        { title: 'Media' },
        { title: 'Likes' }
      ])}			
			<!-- #region feed -->
			<div class="feed-container"></div>
			<!-- #endregion -->
		</main>

		<!-- #region sidebar -->
		<div class="sidebarContainer"></div>
		<!-- #endregion -->
	</div>
	`

  dom.querySelector('#navbar').appendChild(navbar('profile'))
  dom.querySelector('.sidebarContainer').appendChild(sidebar())
  // Get user feed data
  const feedData = fakeTweetsService.getUserTweets(username)

  const renderFeed = () => {
    dom.querySelector('.feed-container').innerHTML = ''
    dom.querySelector('.feed-container').appendChild(Feed(feedData))
  }
  renderFeed()

  const renderUserInfo = () => {
    dom.querySelector('.profileInfoContainer').innerHTML = ''
    dom
      .querySelector('.profileInfoContainer')
      .appendChild(ProfileInfo(userData))
  }
  renderUserInfo()

  store.subscribe('tweets', renderFeed)
  store.subscribe('users', renderUserInfo)

  // Events listeners
  dom.querySelector('.back-btn').onclick = () => history.back()

  return dom
}
