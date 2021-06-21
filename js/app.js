import store from './store/store.js'
import HomePage from './pages/home.js'
import ProfilePage from './pages/profile.js'

function loadPage (page) {
  document.querySelector('.root').innerHTML = ''
  document.querySelector('.root').appendChild(page())
}
loadPage(HomePage)
