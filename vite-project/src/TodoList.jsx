import React, { useState } from 'react'

const TodoList = () => {
    const[text,settext]=useState("")
    const[todo,settodo]=useState([])
    const handleClick=()=>{
            settodo([...todo, text]);

        settext("")
    }
  return (
    <div>
      <h2>ToDoList</h2>
      <input type='text'placeholder='Enter todo' value={text} onChange={(e)=>settext(e.target.value)}></input>
      <button onClick={handleClick}>AddTOdo</button>
        {
            todo.map((value)=>{
                return(
                    <>
                    <p>{value}</p>
                    </>
                )
            })
        }
    </div>
  )
}

export default TodoList
