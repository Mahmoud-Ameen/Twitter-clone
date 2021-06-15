import HomePage from './pages/home.js'

function loadPage (page) {
  document.querySelector('.root').innerHTML = page()
}
loadPage(HomePage)
