import React, { useEffect, useState } from 'react'

const Tabs = () => {
    const[tab,settab]=useState("Home")
    useEffect(()=>{
        console.log("Current tab",tab)
    },[tab])
  return (
    <div>
        <button onClick={()=>settab("Home")}>home</button>
        <button onClick={()=>settab("User")}>Users</button>
        <button onClick={()=>settab("About")}>About</button>
        {tab === "Home" && <h2>Welcome to Home</h2>}

      {tab === "User" && <h2>Users Component</h2>}

      {tab === "About" && <h2>About me</h2>}
      
    </div>
  )
}

export default Tabs
