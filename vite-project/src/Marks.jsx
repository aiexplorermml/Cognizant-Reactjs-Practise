import React, { useContext } from 'react'
import { CounterContext } from './CounterContext'

const Marks = () => {
  const {count,Increment,Decrement}=useContext(CounterContext)
  return (
    <div>
            This is Marks
            <br/>
            <button onClick={Increment}>Inc</button>
            <button onClick={Decrement}>Dec</button>
            <p>Count is{count}</p>

    </div>
  )
}

export default Marks
