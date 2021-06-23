import mainReducer from './mainReducer.js'

function createStore (reducer) {
  let state = {
    users: {
      0: {
        name: 'Mahmoud Ashraf',
        username: 'myUsername',
        image:
          'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png',
        coverImage: 'https://source.unsplash.com/random/600x200',
        bio: 'Front end web Developer ',
        followersIds: new Set([0]),
        followingsIds: new Set([1]),
        tweetsIds: new Set([0]),
        likedTweets: new Set([0, 1]),
        isVerified: true
      },
      1: {
        name: 'JavaScript',
        username: 'JavaScript',
        image:
          'https://pbs.twimg.com/profile_images/827354992377860096/sUe4dG_L_200x200.jpg',
        coverImage:
          'https://pbs.twimg.com/profile_banners/539345368/1517367231/600x200',
        bio: 'Tweets from the Oracle Developer Relations Team @groundbreakers',
        followersIds: new Set([1]),
        followingsIds: new Set([0]),
        tweetsIds: new Set([1, 2]),
        likedTweets: new Set([0, 1]),
        isVerified: true
      }
    },
    tweets: {
      0: {
        authorId: 0,
        publishDate: 'Jul 22, 2020',
        text: '<h3 class="text-headings">Welcome to Twitter clone</h3>',
        links: [],
        images: [],
        retweetersIds: new Set(),
        likersIds: new Set([1, 0])
      },
      1: {
        authorId: 1,
        publishDate: 'Jul 22, 2020',
        text: '5 Great JavaScript Frameworks for 2020 -',
        links: ['https://t.co/otyPN0C9PE?amp=1'],
        images: [],
        retweetersIds: new Set().add(1),
        likersIds: new Set([0, 1])
      },
      2: {
        authorId: 1,
        publishDate: 'Jul 22, 2020',
        text: 'Do you really need javascript frameworks ?',
        links: ['google.com'],
        images: [],
        retweetersIds: new Set().add(1),
        likersIds: new Set([0, 1])
      }
    },
    auth: {
      currentUser: { id: 0 }
    }
  }
  let callbacks = {}

  const getState = slice => (slice ? state[slice] : state)

  const dispatch = action => {
    // Get the slice that the action belongs to
    // Pass the action to the reducer
    // Update the slice in the state with the returned value

    const sliceName = action.slice
    state = {
      ...state,
      [sliceName]: reducer(state[sliceName], action)
    }

    console.log(action.slice + '/' + action.type, '=>', state[sliceName])

    // Execute any callback functions related to this slice
    if (callbacks[sliceName]) {
      callbacks[sliceName].forEach(func => {
        func()
      })
    }
  }

  // Add callback function ex.(rerender of an element)
  const subscribe = (sliceName, func) => {
    if (!callbacks[sliceName]) callbacks[sliceName] = []
    callbacks[sliceName].push(func)
  }

  return { getState, dispatch, subscribe }
}

export default createStore(mainReducer)
