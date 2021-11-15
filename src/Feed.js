import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'

function Feed() {
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />

      <Post profilePic='https://randomuser.me/api/portraits/men/88.jpg' message='Wow, this works!' timestamp='This is a timestamp' username='johnny' image='https://picsum.photos/seed/picsum/200/300' />
      <Post profilePic='https://randomuser.me/api/portraits/men/88.jpg' message='Wow, this works!' timestamp='This is a timestamp' username='johnny' />
    </div>
  )
}

export default Feed
