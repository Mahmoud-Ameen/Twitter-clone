export default function Tabs (tabs) {
  return `
		<div class="mt-4">
			<div class="tabs">
				${tabs.map(tab =>
          tab.active
            ? `<div class='tab active'>
              <span>${tab.title}</span>
            </div>`
            : tab.linkTo
            ? `<a href=${tab.linkTo}>
              <div class='tab'> 
                <span>${tab.title}</span>
              </div> 
            </a>`
            : `<div class='tab'>
              <span>${tab.title}</span>
            </div>`
        )}
			</div>
		</div>
	`
}
