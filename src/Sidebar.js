import { Chat, EmojiFlags, ExpandLessOutlined, LocalHospital, People, Storefront, VideoLibrary } from '@mui/icons-material'
import './Sidebar.css'
import SidebarRow from './components/SidebarRow'
import { useStateValue } from './StateProvider'

function Sidebar() {
    const [{ user }, dispatch] = useStateValue()
    return (
        <div className='sidebar'>
            <SidebarRow src={user.photoURL} title={ user.displayName }/>
            <SidebarRow Icon={LocalHospital} title='COVID-19 InformationCenter'/>
            <SidebarRow Icon={EmojiFlags} title='Pages' />
            <SidebarRow Icon={People} title='Friends' />
            <SidebarRow Icon={Chat} title='Messenger' />
            <SidebarRow Icon={Storefront} title='Marketplace' />
            <SidebarRow Icon={VideoLibrary} title='Videos' />
            <SidebarRow Icon={ExpandLessOutlined} title='Marketplace' />
        </div>
    )
}

export default Sidebar
