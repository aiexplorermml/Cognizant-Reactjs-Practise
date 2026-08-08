import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

const t = () => {
    const[time,setTime]=useState(new Date())
    useEffect(()=>{
        const timer=setInterval(()=>{
          setTime(new Date())
    },[])
return ()=>clearInterval(timer)},[]
  );     
  return (
    <div>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  )
}

export default t
