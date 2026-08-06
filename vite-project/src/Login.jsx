import { useEffect, useState } from 'react'

const Login = () => {
    const[login,setLogin]=useState(false)
    const[name,setName]=useState("")
    const[password,setPassword]=useState("")
    const handleClick=()=>{
        setLogin(!login)
        setName("")
        setPassword("")
        alert("Form submitted Successfully ")
    }
    
  return (
    <div>
        <label htmlFor='' >Name:</label>
        <input type="text" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
        <br></br>
        <br></br>
        <label htmlFor=''>Password:</label>
        <input type="password" placeholder="name" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleClick}>{login?"logout":"login"}</button>  
           
    </div>
  )
}

export default Login
