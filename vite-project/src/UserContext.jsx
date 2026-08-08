import { createContext, useState } from "react";
export const UserContext=createContext()
export const UserProvider=({children})=>{
    const[Username,setUsername]=useState("")

return (
    <UserContext.Provider value={{Username,setUsername}}>
        {children}

    </UserContext.Provider>
)
}