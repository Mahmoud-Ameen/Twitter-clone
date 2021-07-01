import HomePage from './pages/home.js'
import ProfilePage from './pages/profile.js'
import tweetPage from './pages/tweetPage.js'
import followingsPage from './pages/followings.js'
import followersPage from './pages/followers.js'
import login from './pages/login.js'
import fakeAuthService from './fakeServices/fakeAuthService.js'

const routes = {
  '#home': HomePage,
  '#user': ProfilePage,
  '#tweet': tweetPage,
  '#followings': followingsPage,
  '#followers': followersPage,
  '#login': login
}

const routing = () => {
  // [0] => redirect to login page if not signed in
  // [1] => Get url hash
  // [2] => load page based on the hash value

  const hash = window.location.hash

  if (!fakeAuthService.getCurrentUser()) {
    history.pushState(null, null, `#${'login'}`)
    loadPage(login)
    return
  } else if (hash === '#login') {
    history.pushState(null, null, `#home`)
    return loadPage(HomePage)
  }

  if (!hash.length) return loadPage(HomePage)

  let pageName = hash
  if (hash.includes('?')) {
    pageName = hash.slice(0, hash.indexOf('?'))
    let props = hash.slice(hash.indexOf('?') + 1)
    loadPage(routes[pageName], props)
    return
  }

  loadPage(routes[pageName])
}
routing()
window.addEventListener('popstate', routing)

// *
function loadPage (page, props) {
  document.querySelector('.root').innerHTML = ''
  document.querySelector('.root').appendChild(page(props))
}

export function goToPage (pageName) {
  history.pushState(null, null, `#${pageName}`)
  routing()
}
