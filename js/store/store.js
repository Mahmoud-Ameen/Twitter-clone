import mainReducer from './mainReducer.js'

function createStore (reducer) {
  let state = {
    users: {
      MahmoudAshraf: {
        name: 'Mahmoud Ashraf',
        image:
          'https://pbs.twimg.com/profile_images/1410218352346288131/_Bufsj5f_200x200.jpg',
        coverImage:
          'https://pbs.twimg.com/profile_banners/1193209758528004098/1625057708/600x200',
        bio: 'Front end web Developer ',
        followers: new Set(['JavaScript']),
        followings: new Set(['JavaScript', 'OsamaElzero']),
        tweetsIds: new Set([10]),
        isVerified: true
      },
      benAwad: {
        name: 'Ben Awad',
        image:
          'https://pbs.twimg.com/profile_images/1152793238761345024/VRBvxeCM_200x200.jpg',
        coverImage:
          'https://pbs.twimg.com/profile_banners/840626569743912960/1601562221/600x200',
        bio:
          'Software Consultant • YouTuber • React.js and GraphQL Enthusiast ',
        followers: new Set(['JavaScript', 'MahmoudAshraf']),
        followings: new Set(['JavaScript', 'OsamaElzero', 'MahmoudAshraf']),
        tweetsIds: new Set([0]),
        isVerified: true
      },
      JavaScript: {
        name: 'JavaScript',
        image:
          'https://pbs.twimg.com/profile_images/827354992377860096/sUe4dG_L_200x200.jpg',
        coverImage:
          'https://pbs.twimg.com/profile_banners/539345368/1517367231/600x200',
        bio: 'Tweets from the Oracle Developer Relations Team @groundbreakers',
        followers: new Set(['MahmoudAshraf']),
        followings: new Set(['OsamaElzero']),
        tweetsIds: new Set([2]),
        isVerified: true
      },
      OsamaElzero: {
        name: 'Osama Elzero',
        image:
          'https://pbs.twimg.com/profile_images/961969993314373632/37fwNOPW_200x200.jpg',
        coverImage:
          'https://pbs.twimg.com/profile_banners/883839043/1475182691/600x200',
        bio: 'Addicted To Programming. #ElzeroWebSchool',
        followers: new Set(['MahmoudAshraf', 'JavaScript']),
        followings: new Set(['MahmoudAshraf']),
        tweetsIds: new Set([3, 4, 5]),
        isVerified: true
      },
      droos_online: {
        name: 'Abozaid',
        image:
          'https://pbs.twimg.com/profile_images/1308719700814303232/QCkHzpX4_200x200.jpg',
        coverImage:
          'https://pbs.twimg.com/profile_banners/957268691032461312/1519994479/600x200',
        bio: `Used to be a civil engineer. Now, I am a full-time Youtuber and content creator. 
        <br><a class="color-primary" href="https://t.co/I4a6CRY1vd?amp=1">youtube.com/c/droosonline4u</a>`,
        followers: new Set(['MahmoudAshraf', 'OsamaElzero']),
        followings: new Set(['MahmoudAshraf']),
        tweetsIds: new Set([1]),
        isVerified: true
      },
      User12346: {
        password: 'password',
        name: 'user gamed',
        image:
          'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png',
        coverImage: '',
        bio: '',
        followers: new Set(['MahmoudAshraf']),
        followings: new Set([]),
        tweetsIds: new Set()
      }
    },
    tweets: {
      0: {
        author: 'benAwad',
        publishDate: 'Feb 15, 2021',
        publishTime: '8:25pm',
        text: `Other than waiting, this is what I do when I get writers block and can't think of any good ideas:
        <br><br>
        I do a lot of "bad" ideas
        <br><br>
        I apply this to code/content/startups
        <br><br>
        Making "bad" content is a prerequisite to making "good" content`,
        images: [],
        retweeters: new Set([]),
        likers: new Set(['MahmoudAshraf'])
      },
      1: {
        author: 'droos_online',
        publishDate: 'Jul 1, 2021',
        publishTime: '12:02 AM',
        text: `فرق كبير بين واحد بيدرس حاجة عشان هيمتحن وينجح، وواحد بيدرس عشان عايز يطور نفسه، يكتبس مهارة، يزود من قيمته، يستخدم اللي اتعلمه في صنع او عمل شئ ما. 
        الاول هيكره المادة، الثاني ممكن يقعد ٥ و٦ ساعات يذاكر ويتعلم وينسى نفسه.
        <br><br>
        تغيير المنظور ومعرفة الغاية بيفرق في الصبر على التعلم`,
        images: [],
        retweeters: new Set(),
        likers: new Set(['OsamaElzero', 'MahmoudAshraf'])
      },
      2: {
        author: 'JavaScript',
        publishDate: 'Jul 22, 2020',
        publishTime: '2:05 am',
        text:
          '5 Great JavaScript Frameworks for 2020 - <a target="_blank" class="color-primary" href="https://t.co/otyPN0C9PE?amp=1">https://insi...</a>',
        images: [
          'https://pbs.twimg.com/card_img/1410080815984234497/d4K-56qj?format=jpg&amp;name=small'
        ],
        retweeters: new Set(),
        likers: new Set(['OsamaElzero', 'MahmoudAshraf'])
      },
      3: {
        author: 'OsamaElzero',
        publishDate: 'Oct 22, 2020',
        publishTime: '2:05 am',
        text:
          'ساعد اي شخص ولا تنتظر مقابل فربما يمر الزمان وتقع في محنة ولا يقف بجانبك الا من ساعدته',
        images: [],
        retweeters: new Set(['MahmoudAshraf']),
        likers: new Set(['MahmoudAshraf', 'JavaScript', 'OsamaElzero']),
        direction: 'rtl'
      },
      4: {
        author: 'OsamaElzero',
        publishDate: 'MAy 26, 2020',
        publishTime: '5:05 am',
        direction: 'rtl',
        text: `بسم الله الرحمن الرحيم
        <br>
        =============
        <br>
        دة مسار تعليمي لل Front-End Developer فيه خبرات سنين ورتبته باذن الله لما هو مناسب لأغلب الناس وهفضل اطور فيه كل يوم بما يتناسب مع أغلب الناس.
        <br>
        ===================
        <br>
        <a class="color-primary" target = '_blank' href="https://t.co/eWXpcVNzVh?amp=1">https://elzero.org/...</a>`,
        images: [
          'https://pbs.twimg.com/media/EY9_Tf9WoAAEXp0?format=jpg&amp;name=small'
        ],
        retweeters: new Set(),
        likers: new Set([
          'JavaScript',
          'MahmoudAshraf',
          'benAwad',
          'droos_online'
        ])
      },
      5: {
        author: 'OsamaElzero',
        publishDate: 'Jun 26, 2021',
        publishTime: '7:18 am',
        direction: 'rtl',
        text: `من قال لا أدري علموه حتى يدري
        <br>
        ومن قال أدري سألوه حتى لا يدري`,
        images: [],
        retweeters: new Set(),
        likers: new Set([
          'JavaScript',
          'MahmoudAshraf',
          'benAwad',
          'droos_online'
        ])
      },
      10: {
        author: 'MahmoudAshraf',
        publishDate: 'Jul 22, 2020',
        publishTime: '2:05 am',
        text: `<p class="text-heading">Welcome to Twitter clone🤩</p>
        SPA with vanilla js without any libraries/frameworks <br> by <a target='_blank' class="color-primary" href="https://www.facebook.com/0MahmoudAshraf0">Mahmoud</a> <br>
        code on <a class="color-primary" target ='_blank' href="https://github.com/Mahmoud-Ashraf1/Twitter-clone">Github</a>`,
        images: [],
        retweeters: new Set(),
        likers: new Set([
          'JavaScript',
          'MahmoudAshraf',
          'OsamaElzero',
          'benAwad'
        ])
      }
    },
    auth: {
      currentUser: undefined
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
