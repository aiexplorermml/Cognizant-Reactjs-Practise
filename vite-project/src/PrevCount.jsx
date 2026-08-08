import React, { useContext, useEffect, useRef, useState } from 'react'
import { ThemeContext } from './ThemeContext'

const PrevCount = () => {

  const {theme,toggleTheme}=useContext(ThemeContext) 
    const[count,setCount]=useState(0)
    const prevCount=useRef([])

    useEffect(()=>{
        prevCount.current.push(count)
    },[count])
  return (
    <div style={{backgroundColor:theme==="light"?"white":"black",color:theme==="light"?"black":"white"}}>
      <button onClick={toggleTheme}>Theme</button>
      <p>Count is {count}</p>
      <p>Previous count is {prevCount.current}</p>
      <div>
        {
          prevCount.current.map((value,index)=>{
            return (
            <p key={index}>{value}</p>
            )
          })
        }
      </div>
      <button onClick={()=>setCount((prev)=>prev+1)}>Inc</button>

    </div>
  )
}

export default PrevCount
