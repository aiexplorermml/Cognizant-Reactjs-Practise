import React,{use, useEffect, useState} from "react";
import axios from 'axios'
const UseEffect=()=>{
    const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(res=>res.json())
    //     .then((data)=>setData(data))
    // },[])
    const fetchData=async()=>{
        try{
            const users=await axios.get('https://jsonplaceholder.typicode.com/users')
            setData(users.data)
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
    return(
        <div>
            {
            
                data.map((user)=>{
                    return(
                        <p>{user.name} - {user.email}</p>
                    )
                })
            }
        </div>
    )
}

export default UseEffect