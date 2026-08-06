import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const[search,setSearch]=useState("")
    const[count,setCount]=useState(0)
    const doubleCount= useMemo(()=>{
        console.log("count doubled ")

        return count*2
    },[count])
  return (
    <div>
        <input type='text'></input>
        <p>Double count is {doubleCount}</p>
        <p>Count is: {count}</p>
        <button onClick={()=>setCount(prev=>prev+1)}>click</button>
      
    </div>
  )
}

export default UseMemo
