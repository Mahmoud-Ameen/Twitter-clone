import navbar from '../components/common/navbar.js'
import sidebar from '../components/common/sidebar.js'
import tweetsService from '../fakeServices/fakeTweetsService.js'
import authService from '../fakeServices/fakeAuthService.js'
import store from '../store/store.js'
import { goToPage } from '../app.js'
import usersModal from '../components/common/usersModal.js'
import fakeUsersService from '../fakeServices/fakeUsersService.js'

export default function tweetPage (tweetId) {
  // Get Tweet
  let tweetData = tweetsService.getTweetInfo(tweetId)
  const currentUser = authService.getCurrentUser()

  const tweetLikers = Array.from(tweetData.likers)

  const tweetRetweeters = Array.from(tweetData.retweeters)

  const dom = document.createElement('div')
  dom.id = 'tweetPage'
  dom.innerHTML = `
	<link rel="preload" as="style" href="./css/tweetPage.min.css" />
	<link rel="stylesheet" href="./css/tweetPage.min.css">
	<div id='page-layout'>
		<!-- #region navbar -->
		<header id="navbar"></header>
		<!-- #endregion  -->
		<main id="main-section" class="tweet-page">

			<!-- #region heading -->
			<div class="heading">
				<div>
					<span class="icon color-primary back-btn">
						<svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path></g></svg>
					</span>
					<span>
						<h1>Tweet</h1>
					</span>
				</div>
				<span> </span>
			</div>
			<!-- #endregion -->	
			<!-- #region tweet -->
			
			<div class="tweet-preview">
				
			</div>

		</main>
			<!-- #endregion tweet -->

		<!-- #region sidebar -->
		<div class="sidebarContainer"></div>
		<!-- #endregion -->
	</div>
	<div class='usersModalContainer'></div>

	`

  dom.querySelector('#navbar').appendChild(navbar('home'))

  // Events listeners
  dom.querySelector('.back-btn').onclick = () => history.back()

  dom.querySelector('.sidebarContainer').appendChild(sidebar())

  const loadTweet = () => {
    const tweet = document.createElement('div')
    tweet.innerHTML = `
		<div class="upper">
		
		<div class="author">
		<div class="author__image">
		<img alt=${tweetData.author.name} width="48px" height="48px" src=${
      tweetData.author.image
    }>
		</div>
		<a href = ${'#user?' + tweetData.author.username} >
		<span class="autho__name text-bold">${tweetData.author.name}</span>
		<span class="author__username text-secondary">@${
      tweetData.author.username
    }</span>
		</a>
		</div>
		<span class="icon more"><svg viewBox="0 0 24 24" aria-hidden="true"><g><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg></span>
		</div>
		
		<div class="content ">
		<div class="tweet-body " style=${'direction:' + tweetData.direction + ';'}>
		<p>
		
		${tweetData.text}
		<!-- Render links -->
		${
      tweetData.links.length
        ? tweetData.links.map(
            link =>
              `<br> <a class="color-primary" href=${link}>${link.slice(
                0,
                20
              )}...</a>`
          )
        : ''
    }
				
				</p>
				</div>
				
				<a href = "#" class="publish text-secondary">
				${tweetData.publishTime}, &nbsp;
				${tweetData.publishDate}
				</a>
				
				<div class="tweet__stats">
				<span class="retweets text-secondary stat">
				<span class="text-bold retweetsCount">${tweetData.retweeters.size}</span>
				Retweets
				</span>
				<span class="likes text-secondary stat">
				<span class="text-bold likes">${tweetData.likers.size}</span>
				Likes
				</span>
				</div>
				
				<div class="tweet__actions">
				<span class="action reply">
				<span class="icon">
				<svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path></g></svg>
				</span>
				</span>
				<span class="action retweet">
				<span class="icon">
				<svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path></g></svg>
				</span>
				</span>
				<span class='action like'>
				<span class="icon">
				${
          tweetData.likers.has(currentUser)
            ? `<svg viewBox='0 0 24 24' aria-hidden='true' style="fill:red">
					<g>
					<path d='M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z'></path>
					</g>
					</svg>`
            : `<svg viewBox='0 0 24 24' aria-hidden='true'>
					<g>
					<path d='M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z'></path>
					</g>
					</svg>`
        }
				</span>
				</span>
				<span class="action share">
				<span class="icon">
				<svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path><path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path></g></svg>
				</span>
				</span>
				</div>
				</div>
				`
    dom.querySelector('.tweet-preview').innerHTML = ''
    dom.querySelector('.tweet-preview').append(tweet)
    // Event listiners
    dom
      .querySelector('.action.like')
      .addEventListener('click', () =>
        tweetsService.handleLikeTweet(tweetData.id)
      )

    dom
      .querySelector('.author__image')
      .addEventListener('click', () =>
        goToPage(`user?${tweetData.author.username}`)
      )

    // show likers users
    const loadLikersModal = () => {
      dom
        .querySelector('.usersModalContainer')
        .appendChild(
          usersModal(
            tweetLikers,
            'Liked by',
            () => (dom.querySelector('.usersModalContainer').innerHTML = '')
          )
        )
    }
    dom.querySelector('.stat.likes').addEventListener('click', loadLikersModal)

    // show retweeters users
    dom.querySelector('.stat.retweets').addEventListener('click', () => {
      dom
        .querySelector('.usersModalContainer')
        .appendChild(
          usersModal(
            tweetRetweeters,
            'Retweeted by',
            () => (dom.querySelector('.usersModalContainer').innerHTML = '')
          )
        )
    })
  }
  loadTweet()

  store.subscribe('tweets', loadTweet)

  return dom
}
