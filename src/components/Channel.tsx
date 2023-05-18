import {IoIosArrowBack} from 'react-icons/io'

const Channel = ({setChannel, channel, grpName, descText, id}: {setChannel: any, channel: boolean, grpName: string, descText: string, id: number}) => {
    
    const storedItem: string | null = localStorage.getItem('list')

    const items: [any] = storedItem ? JSON.parse(storedItem): [];
    
  return (
    <div className='flex flex-col'>
        <div className="flex  w-full py-[17.24px] 
        px-[32.99px] bg-[#120F13] box-shadow mb-[18.58px]" style={{height: '65px'}}>
            <IoIosArrowBack 
            onClick={() => setChannel(!channel)}
            style={{marginRight: '22.78px', color: 'white', alignSelf: 'center', cursor: 'pointer'}} />
            <p className='text-base text-white'>All channels</p>
        </div>
        <div className="flex flex-col pl-[32.99px]">
        <p className='text-base text-white'>{grpName}</p>
        <p style={{background: 'transparent',height: 'auto' ,width: '223px', marginBottom:'7px',
         color: 'white', overflow: 'hidden', ...(descText === '' ? {display: 'none'}: {display: 'block'}),
          outline: 'none', fontSize: '14px', marginTop: '17.86px'}}>{descText}</p>
                <div className="flex flex-col" style={{ marginTop: '15.58px'}}>
                    <p className='text-base text-white' style={{marginBottom: '11px'}}>Members</p>
                    {items.filter(item => item.id === id).map((item, index) => (
                        <div className="flex" key={index} style={{ alignItems: 'center',
                        marginBottom: '13px'}}>
                           <div className="flex justify-center items-center  w-[42px] h-[42px]
                            bg[#252329] mr-3" 
                            style={{display: 'flex', borderRadius: '8px' ,justifyContent: 'center', 
                            alignItems:'center', width: '42px', height: '42px',
                             background: '#252329', marginRight: '12px', color: '#FFFFFF', fontSize: '18px'}}>
                                {item.name.split(" ").map((word: string) => word.charAt(0))}</div>
                           <p className='text-base text-white'>{item.name}</p>
                       </div>
                    ))}
                </div>
            </div>
    </div>
  )
}

export default Channel