import Story from './components/Story'
import './StoryReel.css'

function StoryReel() {
  return (
    <div className='storyReel'>
      <Story image='https://picsum.photos/id/675/200/300' profileSrc='https://randomuser.me/api/portraits/women/79.jpg' title='Jane Doe' />
      <Story image='https://picsum.photos/id/237/200/300' profileSrc='https://randomuser.me/api/portraits/men/10.jpg' title='John Doe' />
      <Story image='https://picsum.photos/id/432/200/300' profileSrc='https://randomuser.me/api/portraits/men/77.jpg' title='Clark Kent' />
      <Story image='https://picsum.photos/id/256/200/300' profileSrc='https://randomuser.me/api/portraits/men/88.jpg' title='Oliver Queen' />
      <Story image='https://picsum.photos/id/163/200/300' profileSrc='https://randomuser.me/api/portraits/women/88.jpg' title='Chloe Sullivan' />
    </div>
  )
}

export default StoryReel
