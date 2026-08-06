import React, { useState } from 'react'

const Accrodation = () => {
    const [showText ,setShowText] = useState(false)
    const [showResponse,setshowResponse]=useState(false)
    const handleClick =()=>{
        setShowText((prev)=>!prev)
    }
    const handleClick2 =()=>{
        setshowResponse(!showResponse)
    }
  return (
    <div>
      <button onClick={handleClick}>What is React ?</button>
      {
        showText && <p>React is a JavaScript Library</p>
      }
      <button onClick={handleClick2}>What is JavaScript</button>
      {
        showResponse&&<p>js</p>
      }

    </div>
  )
}

export default Accrodation
