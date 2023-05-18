import { ameer } from '../assets'
import React, {useEffect, useState} from 'react'

const Chats = ({ id }: {id: number }) => {
  const [profileName , setProfilename ] = useState<string>('')


  const storedItems: string | null = localStorage.getItem('chats')

  const chats: [any] = storedItems ? JSON.parse(storedItems): [];

  const nameSet = () => {
        const storedName: string | null = localStorage.getItem('users')
        const itemsGrp: [any] = storedName ? JSON.parse(storedName): [];
        const storedId: string | null = localStorage.getItem('id');
        if (storedId) {
        const idd: number = JSON.parse(storedId);
        itemsGrp.find(item =>  item.id === idd ? setProfilename(item.name): '' )
        }
     }

     useEffect(() => {
        nameSet()
     }, [])

  return (
   <div className="flex flex-col scrollBar" style={{paddingLeft: '78.62px', paddingRight: '75px',
    height: '445px', overflowY: 'scroll',   }} >
     {chats.filter((item: any) => item.id === id).map((item: any, index: number)=> (
        <div className='flex' key={index} style={{ marginBottom: '34px'}} >
        <div className="flex">
        <div className="flex justify-center items-center  w-[42px] h-[42px]
             bg[#252329] mr-3" 
             style={{display: 'flex', borderRadius: '8px' ,justifyContent: 'center', 
             alignItems:'center', width: '42px', height: '42px',
                 background: '#252329', marginRight: '12px',
                 color: '#FFFFFF', fontSize: '18px'}}>
              <p className='text-base text-white'>{profileName.split(" ").map((word: string) => word.charAt(0))}</p>
         </div>
        </div>
         <div className="w-full" style={{paddingRight: '70px'}}>
         <div className="flex">
         <p className='text-base ' style={{color: '#777', marginRight: '15px'}}>{item.name}</p>
         <p style={{fontSize: '12px', color: '#777'}}>{item.day} at {item.hours}:{item.min} Am</p>
         </div>
         <p className='text-white' style={{fontSize: '16px'}}>{item.text}</p>
         </div>
     </div>
     ))}
   </div>
  )
}

export default Chats