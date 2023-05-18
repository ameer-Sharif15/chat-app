import  { useState, useEffect } from 'react'
import {RiSearchLine} from 'react-icons/ri'
import {IoIosArrowDown} from 'react-icons/io'
import {GrAdd} from 'react-icons/gr'
import { ameer } from '../assets'
import Channel from './Channel'
import AddGroup from './AddGroup'
import { createGroup } from '../api/channel'
import {useStateContext} from '../context/ContextProvider'
import { createUsersId } from '../api/users'



const SideBar = ({setId,setGroupName, id}:
    {setId : any, setGroupName: any, id: number}) => {
    const [channel, setChannel] = useState<boolean>(false)
    const [grpName, setGrpName] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [desc, setDesc] = useState<string>('')
    const [descText, setDescText] = useState<string>('')
    const [searchBox, setSearchBox] = useState<boolean>(false)
    const [search, setSearch] = useState('')
    const { idSet, setIdSet , setNameItem, nameItem } = useStateContext()
    const [isOpen, setIsOpen] = useState(false)
    const [profileName , setProfilename ] = useState<string>('')

     
    function openModal() {
      setIsOpen(true)
    }
    function closeModal() {
      setIsOpen(false)
    }
    
    const storedItem: string | null = localStorage.getItem('channels')
    
    const items: [any] = storedItem ? JSON.parse(storedItem): [];

    const storedItems: string | null = localStorage.getItem('list')

    const itemS: [any] = storedItems ? JSON.parse(storedItems): [];

    
     const nameSet = () => {
        const storedName: string | null = localStorage.getItem('users')
        const itemsGrp: [any] = storedName ? JSON.parse(storedName): [];
        const storedId: string | null = localStorage.getItem('id');
        if (storedId) {
        const idd: number = JSON.parse(storedId);
        itemsGrp.find(item =>  item.id === idd ? setProfilename(item.name): '' )
        itemsGrp.find(item =>  item.id === idd ? setNameItem(item.name): '' )
        itemsGrp.find(item =>  item.id === idd ? setIdSet(item.id): '' )
        }
     }

     useEffect(() => {
        nameSet()
     }, [])
     
    const handleAdd = () => {
        const avName = name.split(" ").map(word => word.charAt(0))
        const randomId = Math.floor(Math.random() * 100000);
        if (name === "") {
            setName('')
            setDesc('')
        } else {
        const newVal: {
            name: string ,
            icon: string[],
            desc: string, 
            id: number
            } = {
            name: name,
            icon: avName,
            desc: desc,
            id: randomId,
        }
        setIsOpen(false)
        createGroup(newVal)
        setName('')
        setDesc('')
    }

    }
         
        const handleChange = (e: any) => {
            const inputVal = e.target.value
            setSearch(inputVal)
            const records = items
            const search = records.find(record => record.name === inputVal)
            if (search) {
                setSearchBox(true)

            } else {
                setSearchBox(false)
            }

        }


   const handleClick = (index: number, item: string, desc: string, id: number) => {
    const newVal: { 
        name: string,
        id: number,
        postId: number
    } = {
        name: nameItem,
        id: id,
        postId: idSet
    }
       setGrpName(item)
       setGroupName(item)
       setDescText(desc)
       setId(id)
        setChannel(!channel)
        const ifChecked = itemS.find(item => item.postId === idSet && item.id === id)
        if (!ifChecked) {
            createUsersId(idSet, newVal)
        }
   }
  return (
    <div className='flex relative  h-screen bg-[#333333] flex-col'
    style={{width: '273px'}}>
         <AddGroup  isOpen={isOpen} closeModal={closeModal} setName={setName} setDesc={setDesc} handleAdd={handleAdd} name={name} desc={desc} />
        {channel ? (
            <Channel setChannel={setChannel} channel={channel} grpName={grpName} descText={descText} id={id} />
        ): (
            <>
            <div className="flex justify-between w-full py-[17.24px] 
            px-[32.99px] bg-[#120F13] box-shadow mb-[18.58px]">
                <p className='text-base text-white'>Channels</p>
                <div className="w-[32px] h-[32px] bg-[#252329] flex justify-center items-center "
                onClick={openModal}
                 style={{color: '#fff', display: 'felx', justifyContent: 'center',
                  alignItems: 'center', cursor: 'pointer', borderRadius: '8px'}}>
                <GrAdd style={{color: 'white'}}  />
                </div>
            </div>
            <div className="flex flex-col pl-[32.99px]" style={{paddingRight: '22px'}}>
                <div className="relative">
                <input type="text" placeholder='Search' 
                onChange={(e) =>  handleChange(e)}
                value={search}
                className='bg-[#3C393F] w-full
                rounded-[8px] text-[#828282] outline-none
                 h-[48px] pl-[44.5px] py-[14.5px] ' />
                    <RiSearchLine className='absolute top-[15px] left-3' />
                </div>
                <div className="flex flex-col" style={{ marginTop: '34.58px'}}>
                    {searchBox ? (
                        <div className="">
                            {items.filter(record => record.name === search).map((item: any, index: number) => (
                                <div className="flex" style={{ alignItems: 'center', cursor: 'pointer',
                                marginBottom: '13px',}}
                                key={index}
                                onClick={() => handleClick(index, item.name, item.desc, item.id)}
                                >
                                   <div className="flex justify-center items-center  w-[42px] h-[42px]
                                    bg[#252329] mr-3" 
                                    style={{display: 'flex', borderRadius: '8px' ,justifyContent: 'center', 
                                    alignItems:'center', width: '42px', height: '42px',
                                     background: '#252329', marginRight: '12px', color: '#FFFFFF', fontSize: '18px', textTransform: 'uppercase'}}>{item.icon}</div>
                                   <p className='text-base text-white' style={{textTransform: 'uppercase'}}>{item.name}</p>
                               </div>
                            ))}
                        </div>
                    ) : (
                   <div className="">
                     {items.map((item: any , index: number) => (
                        <div className="flex" style={{ alignItems: 'center', cursor: 'pointer',
                        marginBottom: '13px'}}
                        key={index}
                        onClick={() => handleClick(index, item.name, item.desc, item.id)}
                        >
                           <div className="flex justify-center items-center  w-[42px] h-[42px]
                            bg[#252329] mr-3" 
                            style={{display: 'flex', borderRadius: '8px' ,justifyContent: 'center', 
                            alignItems:'center', width: '42px', height: '42px',
                             background: '#252329', marginRight: '12px', color: '#FFFFFF', fontSize: '18px', textTransform: 'uppercase'}}>{item.icon}</div>
                           <p className='text-base text-white' style={{textTransform: 'uppercase'}}>{item.name}</p>
                       </div>
                    ))}
                   </div>
                    )}
                </div>
            </div>
            </>
        )}
        <div className="flex absolute justify-between w-full py-[17.24px] 
        px-[32.99px] bg-[#120F13] box-shadow ]" style={{bottom: '0px', alignItems: 'center'}}>
            <div className="flex" style={{alignItems: 'center'}}>
            <div className="flex justify-center items-center  w-[42px] h-[42px]
                        bg[#252329] mr-3" 
                        style={{display: 'flex', borderRadius: '8px' ,justifyContent: 'center', 
                        alignItems:'center', width: '42px', height: '42px',
                         background: '#252329', marginRight: '12px',
                          color: '#FFFFFF', fontSize: '18px'}}>
                            <p className='text-base text-white'>{profileName.split(" ").map((word: string) => word.charAt(0))}</p>
                          </div>
            <p className='text-base text-white'>{profileName}</p>
            </div>
            <IoIosArrowDown style={{color: 'white', alignSelf: 'center'}}/>
        </div>
    </div>
  )
}

export default SideBar

