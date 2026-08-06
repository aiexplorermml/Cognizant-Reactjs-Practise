import {useState,useCallback} from 'react'
import Childcallback from './Childcallback'

const ParentClass = () => {
    const [count ,setCount] = useState(0)
    const[search,setSearch]= useState("")
    const doubleCount = ()=>{
    return count *2
       } 
       doubleCount()


       const handleClick =useCallback(()=>{
        alert("hello")
       },[])
  return (
    <div>
        this is Parent Callback function
      <p>Count is {count}</p>
      <button onClick={()=>setCount(prev =>prev+1)}>Inc</button>
      <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
      
      <hr />
      <Childcallback clicks={handleClick}/>
      
    </div>
  )
}

export default ParentClass
