import React, { useState } from 'react'

const Search = () => {
  const[search,setSearch]=useState("")
  const users=["bharath","kamal","krishna","balu"]
  const findUsers=users.filter((user)=>user.includes(search))
  return (
    <div>
      <input type='text' placeholder='searchhhh' value={search} onChange={(e)=>setSearch(e.target.value)}></input>{
        findUsers.map((user)=>{
          return (
            <>
            <p>{user}</p></>
          )
        })
      }
    </div>
  )
}

export default Search
