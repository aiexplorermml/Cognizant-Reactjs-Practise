import React from 'react'
import { useReducer } from 'react'
import { useContext } from 'react'
import Profile from './Profile'
import Projects from './Projects'
import Attendance from './Attendance'
import Marks from './Marks'
import { Land } from './LandContext'

import './Dashboard.css'

const Dashboard = () => {
      const {land,hello} =useContext(Land)

    const initalState={
        ActivePage:"Profile"
    }
    const reducer=(state,action)=>{
        switch(action.type){
            case "Profile":
                return {
                    ...state,
                    ActivePage:"Profile"
                }
            case "Projects":
                return {
                    ...state,
                    ActivePage:"Projects"
                }
            case "Atten":
                return {
                    ...state,
                    ActivePage:"Atten"
                }
            case "Marks":
                return {
                    ...state,
                    ActivePage:"Marks"
                }
            default:
                return state;

        }
    }
        const[state,dispatch]=useReducer(reducer,initalState)
    
  return (
    <div className='comp'>
        <div className='side' >SideBar
                        <br/>
                        <h1>{land}</h1>

            <button onClick={()=>dispatch({type:"Profile"})}>Profile</button>
            <br/>
            <button onClick={()=>dispatch({type:"Projects"})}>Projects</button>            <br/>

            <button onClick={()=>dispatch({type:"Atten"})}>Attendance</button>             <br/>
            <button onClick={()=>dispatch({type:"Marks"})}>Marks</button>             <br/>

                </div>



        <div className='main'>Mainbar
        {
            state.ActivePage==="Profile"&&<Profile/>

        }
        {
             state.ActivePage==="Projects"&&<Projects/>

        }
        {
            state.ActivePage==="Atten"&&<Attendance/>
        }
        {
            state.ActivePage==="Marks"&&<Marks/>
        }
        </div>
      
    </div>
  )
}

export default Dashboard
