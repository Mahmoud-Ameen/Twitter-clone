import { goToPage } from '../app.js'
import newTweet from '../components/new-tweet.js'
import tweetsService from '../fakeServices/fakeTweetsService.js'

export default function createTweet (closeFunc) {
  const dom = document.createElement('div')
  dom.innerHTML = `

  <div class="modalContainer">
    <div class='createTweetModal modal'>
      <div class="heading">
        <span class="icon color-primary close-btn">
          <svg viewBox="0 0 24 24" aria-hidden="true" class="r-13gxpu9 r-4qtqp9 r-yyyyoo r-179l7hd r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-10uooop"><g><path d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"></path></g></svg>								</span>
        <span>
    </div>
    <div class="newTweetModalContainer"></div>
    </div>
  </div>
`

  dom.querySelector('.newTweetModalContainer ').appendChild(newTweet())

  const tweetBtn = dom.querySelector('button.tweet')
  const textInput = dom.querySelector('input.new-tweet__text')

  // Events listeners
  dom.querySelector('.close-btn').onclick = closeFunc

  tweetBtn.addEventListener('click', () => {
    tweetsService.createTweet(textInput.value)
    history.back()
  })

  return dom
}
