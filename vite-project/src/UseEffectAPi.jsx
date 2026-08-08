import React, { useEffect, useState } from 'react'
const UseEffectAPi = () => {
    const [data, setData] = useState([])
    const[search,setSearch]=useState("")
        useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=>res.json())
            .then((data)=>setData(data))
        },[])
          const findUsers=data.filter((user)=>user.name.includes(search))
            
    
  return (
    <div>
      <p>Hello</p>
            <input type='text' placeholder='searchhhh' value={search} onChange={(e)=>setSearch(e.target.value)}></input>

      {
        
            
                findUsers.map((user)=>{
                    return(
                        <p>{user.name} - {user.email}</p>
                    )
                })
            }
    </div>
  )
}

export default UseEffectAPi
