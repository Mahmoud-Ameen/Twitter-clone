import searchBar from './searchBar.js'
import topicsSuggesstions from './topicsSuggestions.js'
import friendsSuggestions from './friendsSuggestions.js'
import fakeUsersService from '../../fakeServices/fakeUsersService.js'
import store from '../../store/store.js'

export default function sidebar () {
  const dom = document.createElement('div')
  dom.innerHTML = `
	<aside id="sidebar">
  <!-- Search bar --> 
  ${searchBar()}
  <!-- People to follow -->
  <div class="friendSuggesstions"></div>
  
  <!-- Topics to follow -->
  ${topicsSuggesstions()}
  
  <!-- Copyrights -->
  <div class="copyrights">
  All &copy; rights reserved <br>
  code by <span>Mahmoud</span>
  </div>
	</aside>
	`

  const loadFriendsSuggesstions = () => {
    // TODO: get this data from users service
    const usersnames = ['OsamaElzero', 'MahmoudAshraf', 'JavaScript']

    //

    dom.querySelector('.friendSuggesstions').innerHTML = ''
    dom
      .querySelector('.friendSuggesstions')
      .appendChild(friendsSuggestions(usersnames))
  }
  loadFriendsSuggesstions()
  store.subscribe('users', loadFriendsSuggesstions)

  return dom
}
