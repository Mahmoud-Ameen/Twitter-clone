export default function settingsModal (closeFunc) {
  const dom = document.createElement('div')
  dom.id = 'settingsModal'

  dom.innerHTML = `
	<div class="modalContainer">
		<div class="modal p-4">
			<header>
				<p class="mb-4 text-center" >Customize your view</p>
				<p class="text-secondary text-center">Manage your font size, color and background. These settings affect all the Twitter accounts on this browser.</p>
			</header>
			<div class="settings">
				<div class="setting colors">
					<p class="setting__title">Color</p>
					<ul>
						<li data-color="#1da1f2" class=" color blue"></li>
						<li data-color="#ffad1f" class=" color yellow"></li>
						<li data-color="#e0245e" class=" color red"></li>
						<li data-color="#794bc4" class=" color purple"></li>
						<li data-color="#f45d22" class=" color orange"></li>
						<li data-color="#17bf63" class=" color green"></li>
					</ul>
				</div>
				<div class="setting background">
					<p class="setting__title">Background</p>
					<ul>
						<li class="backgroundColor default active" data-backgroundcolor="#fff">Default</li>
						<li class="backgroundColor dim" data-backgroundcolor="#15202b"> Dim</li>
						<li class="backgroundColor lightsOut" data-backgroundcolor="#000">Lights out</li>
					</ul>
				</div>
			</div>
			<div class="btnContainer">
				<button class="btn btn--primary done">done</button>
			</div>
			
		</div>
	</div>
	`

  // Changing primary color
  dom.querySelectorAll('.color').forEach(
    e =>
      (e.onclick = () => {
        document.documentElement.style.setProperty(
          '--color-primary',
          e.dataset.color
        )
      })
  )

  // Changing backgroundcolors
  dom.querySelectorAll('.backgroundColor').forEach(
    e =>
      (e.onclick = () => {
        // change background color
        document.documentElement.style.setProperty(
          '--color-background',
          e.dataset.backgroundcolor
        )

        // Changes text and border color
        if (e.classList.contains('dim') || e.classList.contains('lightsOut')) {
          document.documentElement.style.setProperty(
            '--color-text-normal',
            '#d9d9d9'
          )
          document.documentElement.style.setProperty(
            '--color-primary-lightest',
            getComputedStyle(document.documentElement).getPropertyValue(
              '--color-primary'
            ) + '20'
          )
          document.documentElement.style.setProperty(
            '--color-border',
            '#38444d'
          )
        } else {
          document.documentElement.style.setProperty(
            '--color-text-normal',
            '#0f1419'
          )
          document.documentElement.style.setProperty(
            '--color-border',
            'rgb(235, 238, 240'
          )
        }
      })
  )

  dom.querySelector('.done').onclick = closeFunc
  return dom
}
