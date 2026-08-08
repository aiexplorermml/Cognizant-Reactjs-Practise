import React, { useReducer } from 'react'

const UseReducer = () => {
    const initalState={
        count:0,
        dark:false
    }
    const reducer=(state,action)=>{
        switch(action.type){
            case "Increment1":
                return{
                    ...state,
                    count:state.count+1
                }
            case "Dark":
                return{
                    ...state,
                    dark:!state.dark
                }
            case "DEC":
                return{
                    ...state,
                    count:state.count-1
                }
            case "Increment5":
                return{
                    ...state,
                    count:state.count+5
                }
        }
    }
    const[state,dispatch]=useReducer(reducer,initalState)
  return (
        <div style={{backgroundColor:state.dark?"black":"white",color:state.dark?"white":"black"}}>
        <p>count :{state.count}</p>
        <button onClick={()=>dispatch({type:"Increment1"})}>Incr</button>
        <button onClick={()=>dispatch({type:"Dark"})}>Theme</button>
        <button onClick={()=>dispatch({type:"Increment5"})}>Inc5</button>
        <button onClick={()=>dispatch({type:"DEC"})}>DEc</button>
      
    </div>
  )
}

export default UseReducer
