import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './components/MessageSender'
import Post from './components/Post'

function Feed() {
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />

      <Post profilePic='https://randomuser.me/api/portraits/men/88.jpg' message='Wow, this works!' timestamp='This is a timestamp' username='johnny' image='https://images.unsplash.com/photo-1636830845806-d551ac9968e3?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw' />
      <Post profilePic='https://randomuser.me/api/portraits/men/92.jpg' message='Wow, this works!' timestamp='This is a timestamp' username='johnny' />
    </div>
  )
}

export default Feed
