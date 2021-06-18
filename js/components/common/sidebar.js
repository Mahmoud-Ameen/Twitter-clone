import searchBar from './searchBar.js'
import topic from './topic.js'
import friendsSuggestions from './friendsSuggestions.js'

export default function sidebar () {
  return `
	<aside id="sidebar">
		<!-- Search bar --> 
		${searchBar()}
		<!-- People to follow -->
		${friendsSuggestions()}

		<!-- Topics to follow -->
		
		<!-- Copyrights -->
		<div class="copyrights">
			All &copy; rights reserved <br>
			code by <span>Mahmoud</span>
		</div>
	</aside>
	`
}
