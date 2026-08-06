import { use, useEffect, useState } from "react";
function App(){
    const[count,setCount]=useState(0)
    const[showpassword,setShowPassword]=useState(false)
    const[password,setPassword]=useState("")
    const[showtext,setShowText]=useState("")
    const[dark,setDark]=useState(false)
    const[like,setlike]=useState(false)
    const[type,setType]=useState("Even")
    
    useEffect(()=>{
        if(count%2==0){
            setType("Even")
        }else{
            setType("Odd")
        }
    },[count])
    return (
        <>

        <div>
            <p>count:{count}</p>
            <button onClick={()=>setCount((prev)=>prev+1)}>INC</button>
            <p>Types is :{type}</p>
        </div>
        <div style={{backgroundColor:dark?"black":"white",color:dark?"white":"Black"}}>
            <button onClick={()=>setDark(!dark)}>{dark?"black":"white"}</button>
       
       <br></br>

               <p>{like?"liked":"notliked"}</p>

        <button onDoubleClick={()=>setlike(!like)}>{like?"unlike":"liked"}    </button>
        <br></br>
       
        <input type={showpassword ?"text":"password" } value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={()=>setShowPassword(prev=>!prev)}>{showpassword?"Hide":"show"}</button>
        <br/><br/>
        <input type="text" value={showtext} onChange={(e)=>setShowText(e.target.value)}></input>
        <p>{showtext}</p>
        <p>{showtext.length}</p>
        </div>
        
        </>
    )
}
export default App;