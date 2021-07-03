import HomePage from './pages/home.js'
import ProfilePage from './pages/profile.js'
import tweetPage from './pages/tweetPage.js'
import followingsPage from './pages/followings.js'
import followersPage from './pages/followers.js'
import login from './pages/login.js'
import fakeAuthService from './fakeServices/fakeAuthService.js'

const routes = {
  '#home': { page: HomePage, styleSheet: './css/home.min.css' },
  '#user': { page: ProfilePage, styleSheet: './css/profile.min.css' },
  '#tweet': { page: tweetPage, styleSheet: './css/tweetPage.min.css' },
  '#followings': {
    page: followingsPage,
    styleSheet: './css/followings.min.css'
  },
  '#followers': { page: followersPage, styleSheet: './css/followings.min.css' },
  '#login': { page: login, styleSheet: './css/login.min.css' }
}

const routing = () => {
  // [0] => redirect to login page if not signed in
  // [1] => Get url hash
  // [2] => load page based on the hash value
  // [3] => Add the page's style file to the head

  const hash = window.location.hash

  // Redirect to login page if not signed in
  if (!fakeAuthService.getCurrentUser()) {
    history.pushState(null, null, `#${'login'}`)
    loadPage(routes['#login'])
    return
  } else if (hash === '#login') {
    history.pushState(null, null, `#home`)
    return loadPage(routes['#home'])
  }

  // If there is no path specified load home page
  if (!hash.length) return loadPage(routes['#home'])

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
function loadPage (route, props) {
  console.log(route)

  document.querySelector('.root').innerHTML = ''
  document.querySelector('.root').appendChild(route.page(props))

  // Add page stylesheet to the head
  if (!document.head.querySelector(`link[href='${route.styleSheet}']`)) {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = route.styleSheet
    document.head.appendChild(link)
  }
}

export function goToPage (pageName) {
  history.pushState(null, null, `#${pageName}`)

  routing()
}
