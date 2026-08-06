import { createContext, useState } from "react";

export const CounterContext=createContext()

export const CounterProvider=({children})=>{
    const[count,setCount]=useState(0)
    const Increment=()=>{
        setCount((prev)=>prev+1)
    }
    const Decrement=()=>{
        setCount((prev)=>prev-1)
    }
    return (
        <CounterContext.Provider value={{count,Increment,Decrement}}>
                {children}
        </CounterContext.Provider>
    )
}