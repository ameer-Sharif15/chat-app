import  {useState} from 'react'
import ChatBox from '../components/ChatBox'
import SideBar from '../components/SideBar'
import '../App.css'
import '../index.css'

const Home = () => {
    const [id, setId] = useState<number>(0)
    const [close, setClose] = useState<boolean>(false)
    const [navbar, setNavbar] = useState<boolean>(false)
  
    const openNav = () => {
      setNavbar(true)
      setClose(true)
    }
    const closeNav = () => {
      setNavbar(false)
      setClose(false)
    }
    const [groupName, setGroupName] = useState<string>('')
    return (
      <div className='flex' style={{position: 'relative'}}>
        <div className="navBox">
        <SideBar setId={setId} setGroupName={setGroupName} id={id} />
        </div>
        {navbar && (
        <div className="sideBox">
        <SideBar setId={setId} setGroupName={setGroupName} id={id} />
        </div>
        )}
        <ChatBox id={id} groupName={groupName} close={close} openNav={openNav} closeNav={closeNav} />
      </div>
    )
}

export default Home;