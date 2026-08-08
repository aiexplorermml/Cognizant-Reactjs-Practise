import React, { useContext, useState } from 'react'
import { UserContext } from './UserContext'

const Llogin = () => {
    const {Username,setUsername}=useContext(UserContext)
    const [name,setName]=useState("");

    const handleLogin=()=>{
        setUsername(name);
        setName("");
    }
    return (
    <div>

      <h2>Login</h2>

      <input
        type="text"
        placeholder="Enter username"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleLogin}>
        Login
      </button>

    </div>
  );

  
}

export default Llogin
