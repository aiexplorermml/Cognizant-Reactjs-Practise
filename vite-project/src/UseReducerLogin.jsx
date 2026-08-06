import React from 'react'
import { useReducer } from 'react'

const UseReducerLogin = () => {
    const initalState={
        name:"",
        password:"",
        login:false
    }
    const reducer=(state,action)=>{
        switch(action.type){
            case "Login":
                return{
                    ...state,
                    login:!state.login
                }
        }
    }
        const[state,dispatch]=useReducer(reducer,initalState)
    
  return (
    <div>
        <label htmlFor=''>Name</label>
        <input type='text'></input>
        <label htmlFor=''>Password</label>
        <input type='password'></input>
        <button onClick={()=>dispatch({type:"Login"})}>{state.login?"logout":"login"}</button>
        
      
    </div>
  )
}

export default UseReducerLogin
