import store from '../store/store.js'

const users = store.getState('users')

const getUserData = userId => users[userId]

// const getUsersSuggesstions = () => {
// 	let suggesstions = []
// 		for (let i = 0; i < 4; i++) {
// 			let random = Math.random
// 			if()
// 		}
//   return [

//   ]
// }

export default { getUserData }
