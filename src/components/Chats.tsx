import { ameer } from '../assets'
import React, { useEffect, useState } from 'react'
import { collection, addDoc,getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { chat } from '../helper/data';

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

const Chats = ({ id }: { id: number }) => {
  const [profileName, setProfilename] = useState<string>('')


  const storedItems: string | null = localStorage.getItem('chats')

  const chats: [any] = storedItems ? JSON.parse(storedItems) : [];

  // const nameSet = async () => {
  //   const storedId: string | null = localStorage.getItem('id');
  //   const idd: number = storedId ? JSON.parse(storedId): [];
  //   const querySnapshot = await getDocs(collection(db, "users"));
  //   querySnapshot.forEach((doc) => {
  //     const itemsGrp = doc.data()
  //       // localStorage.setItem("users", JSON.stringify(itemsGrp));
  //       itemsGrp.find((item:any) => item.id === idd ? setProfilename(item.name) : '')
  // });
  //   // const storedName: string | null = localStorage.getItem('users')
  //   // const itemsGrp: [any] = storedName ? JSON.parse(storedName) : [];
  //   // const storedId: string | null = localStorage.getItem('id');
  //   // if (storedId) {
  //   //   const idd: number = JSON.parse(storedId);
  //   //   itemsGrp.find(item => item.id === idd ? setProfilename(item.name) : '')
  //   // }
  // }

  // useEffect(() => {
  //   nameSet()
  // }, [])

  return (
    <div className="flex flex-col scrollBar" style={{
      paddingLeft: '78.62px', paddingRight: '75px',
      height: '445px', overflowY: 'scroll',
    }} >
      {chat.filter((item: any) => item.id === id).map((item: any, index: number) => (
        <div className='flex' key={index} style={{ marginBottom: '34px' }} >
          <div className="flex">
            <div className="flex justify-center items-center  w-[42px] h-[42px]
                        bg[#120F13] mr-3"
              style={{
                display: 'flex', borderRadius: '8px', justifyContent: 'center',
                alignItems: 'center', width: '42px', height: '42px',
                background: '#120F13', marginRight: '12px',
                color: '#FFFFFF', fontSize: '18px'
              }}>
              <p className='text-base text-white uppercase'>{profileName.split(" ").map((word: string) => word.charAt(0))}</p>
            </div>
          </div>
          <div className="w-full" style={{ paddingRight: '70px' }}>
            <div className="flex">
              <p className='text-base ' style={{ color: '#777', marginRight: '15px' }}>{item.name}</p>
              <p style={{ fontSize: '12px', color: '#777' }}>{item.day} at {item.hours}:{item.min} Am</p>
            </div>
            <p className='text-white' style={{ fontSize: '16px' }}>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Chats