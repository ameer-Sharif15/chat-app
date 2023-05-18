import { createContext, useContext, useState } from "react";

interface Context {
    nameItem: string,
    setNameItem: React.Dispatch<React.SetStateAction<string>>,
    idSet: number,
    setIdSet: React.Dispatch<React.SetStateAction<number>>,

}


const StateContext  = createContext<Context | any>({})

export const ContextProvider = ({children}:any) => {

    const [nameItem, setNameItem] = useState<string>('')
    const [idSet, setIdSet] = useState<number>(0)
    const [profileName , setProfilename ] = useState<string>('')

    
    
    return(
        <StateContext.Provider 
        value={{
            nameItem,
             setNameItem, 
             idSet, 
             setIdSet,profileName , setProfilename
             }}>
            {children}
            </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);
