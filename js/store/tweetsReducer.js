export default (tweets, action) => {
  // Copying the state to another variable to avoid direct mutation
  let updatedTweets = { ...tweets }

  if (action.type === 'createTweet') {
    console.log('action createTweet called')
    // Get last tweet id
    let newTweetId = Object.keys(tweets).length

    // get tweet data from the action
    let { authorId, text, links, images } = action.payload

    // Get and format publish date
    let publishDate = getFormattedDate()

    // Update the tweets List
    updatedTweets[newTweetId] = {
      authorId,
      text,
      links: links || [],
      images: images || [],
      publishDate,
      likersIds: new Set(),
      retweetersIds: new Set()
    }
  }

  // Like a tweet
  else if (action.type === 'likeTweet') {
    // Should get the author data from the auth service
    // But i will get it from the action object for now

    const { tweetId, userId } = action.payload
    updatedTweets[tweetId] = {
      ...updatedTweets[tweetId],
      likersIds: updatedTweets[tweetId].likersIds.add(userId)
    }
  }

  return updatedTweets
}

function getFormattedDate () {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]

  let publishDate = new Date()
  publishDate = `${
    monthNames[publishDate.getMonth()]
  } ${publishDate.getDate()} ${publishDate.getFullYear()}`
  return publishDate
}
