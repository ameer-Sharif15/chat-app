import  {useState} from 'react'
import { IoMdClose, IoMdMenu, IoMdSend } from 'react-icons/io'
import { createChats } from '../api/chats';
import { useStateContext } from '../context/ContextProvider';
import Chats from './Chats';
import { collection, addDoc,getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3tTugYKXX5wZ-9wRqjR4NawWv2XvM6hI",
  authDomain: "chat-app-8774b.firebaseapp.com",
  projectId: "chat-app-8774b",
  storageBucket: "chat-app-8774b.appspot.com",
  messagingSenderId: "1028840332654",
  appId: "1:1028840332654:web:095c576d02a017e841b57f",
  measurementId: "G-7QT4PLDWX4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const ChatBox = ({id, groupName ,openNav,closeNav, close}:
   {id: number, groupName: string, openNav: any, closeNav: any,close: any ,}) => {
  const [chatText, setChatText] = useState<string>('')
  const { nameItem } = useStateContext()
  const [chats, setChats] = useState<any>([])

  const date = new Date();
  const day = date.getDay();
  const hours = date.getHours();
  const min = date.getMinutes();

  
  const handleSend = async (e: any) => {
    e.preventDefault();
    if (chatText === "" || (id === 0 && chatText)) {
    setChatText('')
      return;
  } else {
    const newVal: {
      text: string,
      day: number,
      hours: number,
      min: number,
      name: string,
      id: number
    } = {
      text: chatText,
      day: day,
      hours:hours,
      min: min,
      name: nameItem,
      id: id,
    }
    setChats([...chats, newVal])
    createChats(newVal)
     const docRef = await addDoc(collection(db, "chats"), newVal);
    console.log("Document written with ID: ", docRef.id);
    
    const querySnapshot = await getDocs(collection(db, "chats"));
      querySnapshot.forEach((doc) => {
        const itemsGrp = doc.data()
          localStorage.setItem("chats", JSON.stringify(itemsGrp));

    });
    setChatText('')
  }}


  
  return (
    <div className="bg-[#252329] w-full flex flex-col" style={{position: 'relative',height: '100vh'}} >
        <div className="bg-[#252329] box-shadow py-[17.24px] " style={{paddingLeft: '78.62px', marginBottom: '54.65px', position: 'relative'}}>
          <div className="menu" onClick={openNav}>
            <IoMdMenu style={{fontSize: '30px', color: '#fff'}} />
          </div>
          {close && (
          <div className="close" onClick={closeNav}>
            <IoMdClose style={{fontSize: '23px', color: '#fff', width: '26px',
             borderRadius: '5px', background:'#120F13', height: '24px'}} />
          </div>
          )}
          <p className='text-base text-white' 
          style={{marginBottom: '6.9px', textTransform: 'capitalize'}}>{groupName}</p>
        </div>
        <Chats id={id}  />

        <div className="w-full" style={{position: 'absolute', bottom: '56px'}}>
        <div className="w-full " style={{paddingLeft: '78.62px', paddingRight: '75px', position: 'relative'}}>
         <form action="#" onSubmit={(e) => handleSend(e)}>
         <input type="text" placeholder='Type a message here' className='w-full' 
          onChange={(e) => setChatText(e.target.value)}
          value={chatText}
          style={{background: '#3C393F', borderRadius: '8px',
           color: 'white', height: '52px', paddingLeft: '17.38px', outline: 'none'}} />
         </form>
           <div className="" 
           onClick={handleSend}
           style={{ 
            width: "39.34px",
            height: "39.34px",
            background: "#2F80ED",
            borderRadius: "8px",
            position: "absolute",
            right: '80px',
            top: '6px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer'
           }}>
            <IoMdSend  style={{color
            : 'white',
            fontSize: '23px'}}/>
           </div>
        </div>
        </div>
      </div>
  )
}

export default ChatBox;