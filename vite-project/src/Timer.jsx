import React, { useState ,useRef} from 'react'

const Timer = () => {
    const intervalRef=useRef(null)
    const[seconds,setSeconds]=useState(0)
    const start=()=>{
        if(!intervalRef.current){
            intervalRef.current=setInterval(()=>{
                setSeconds((prev)=>prev+1)
            },1000)
            }
    }
    const stop=()=>{
        clearInterval(intervalRef.current)
        intervalRef.current=null
    }
    const reset=()=>{
        setSeconds(0)
    }
  return (
    <div>
        <h2>Timer</h2>
        <p>StopWatch:{seconds}</p>
        <button onClick={start}>start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      
    </div>
  )
}

export default Timer
