import HomePage from './pages/home.js'
import ProfilePage from './pages/profile.js'

function loadPage (page) {
  document.querySelector('.root').innerHTML = page()
}
loadPage(ProfilePage)
