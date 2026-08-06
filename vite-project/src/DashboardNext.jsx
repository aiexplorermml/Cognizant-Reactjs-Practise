import React from 'react'
import { useReducer } from 'react'
import Profile from './Profile'
import Projects from './Projects'
import Attendance from './Attendance'
import Marks from './Marks'

const DashboardNext = () => {
    const initalState={
        step:1
    }
    const reducer=(state,action)=>{
        switch(action.type){
            case "Next":
                return{
                    ...state,
                    step:state.step+1
                }
            case "Prev":
                return{
                    ...state,
                    step:state.step-1
                }
            Default:
            return state
            
        }
    }
            const[state,dispatch]=useReducer(reducer,initalState)
    
  return (
    <div>
        

        {state.step===1&&<Profile/>}
        {state.step===2&&<Projects/>}
        {state.step===3&&<Attendance/>}
        {state.step===4&&<Marks/>}

        {state.step>1&&
        (<button onClick={()=>dispatch({type:"Prev"})}>prev</button>)
        }
        {state.step<4&&(<button onClick={()=>dispatch({type:"Next"})}>Next</button>)}


        
        
      
    </div>
  )
}

export default DashboardNext
