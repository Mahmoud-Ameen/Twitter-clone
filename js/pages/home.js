import navbar from '../components/common/navbar.js'

export default function HomePage () {
  return `
	<div id='page-layout'>
	${navbar()}
  <main id='main-section'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci enim
    numquam dolorem alias cupiditate, mollitia atque dignissimos vero, sequi
    eligendi eius quaerat voluptatibus sed ad itaque? Labore ducimus excepturi
    quod!
  </main>
</div>

	`
}
