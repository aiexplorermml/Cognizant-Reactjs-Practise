import React, { useReducer } from 'react'

const UseReducer = () => {
    const initalState={
        count:0,
        dark:false
    }
    const reducer=(state,action)=>{
        switch(action.type){
            case "Increment":
                return{
                    ...state,
                    count:state.count+1
                }
            case "Dark":
                return{
                    ...state,
                    dark:!state.dark
                }
        }
    }
    const[state,dispatch]=useReducer(reducer,initalState)
  return (
        <div style={{backgroundColor:state.dark?"black":"white",color:state.dark?"white":"black"}}>
        <p>count :{state.count}</p>
        <button onClick={()=>dispatch({type:"Increment"})}>Incr</button>
        <button onClick={()=>dispatch({type:"Dark"})}>Theme</button>
      
    </div>
  )
}

export default UseReducer
