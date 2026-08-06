import { createContext} from "react";



export const Land=createContext()
export const LandProvide=({children})=>{
    const land="10 Acres"
    const hello=()=>{
        alert("Hello")
    }
    return(
        <Land.Provider value={{land,hello}}>
            {children}
        </Land.Provider>
    )
}